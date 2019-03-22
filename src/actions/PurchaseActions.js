import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {
  PUR_ADDING_TO_CART,
  PUR_ADDING_TO_CART_SUCCESSFULLY,
  PUR_ADDING_TO_CART_UNSUCCESSFULLY,
  PUR_CLOSE_ATC_MODAL,
  PUR_REMOVE_FROM_CART_SUCCESSFULLY,
  PUR_UPDATE_ITEM_IN_CART,
  PUR_PLACE_ORDER
} from '../constants';

export const purCloseAddToCartModal = () => {
  return {
    type: PUR_CLOSE_ATC_MODAL
  }
}

export const purAddToCart = (itemTag, qty, size) => {
  return (dispatch) => {
    dispatch({ type: PUR_ADDING_TO_CART });
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      const uid = currentUser.uid;
      firebase.database().ref(`/users/${uid}/inCart`).push([itemTag, qty, size]).then((res) => {
        // Handle add to cart successfully
        dispatch({
          type: PUR_ADDING_TO_CART_SUCCESSFULLY,
          payload: [itemTag, qty, size, res.key]
        })
      }).catch(() => dispatch({
        // Handle add to cart unsuccessfully
        type: PUR_ADDING_TO_CART_UNSUCCESSFULLY
      }))
    }
  }
}

export const purRemoveFromCart = (refID) => {
  return (dispatch) => {
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      const uid = currentUser.uid;

      firebase.database().ref(`/users/${uid}/inCart/${refID}`).remove().then(() => {
        // Handle remove item from cart successfully
        dispatch({
          type: PUR_REMOVE_FROM_CART_SUCCESSFULLY,
          payload: refID
        })
      }).catch((e) => {
        // Handle remove item from cart unsuccessfully
        console.log(e);
      });
    }
  }
}

export const purUpdateCart = (item) => {
  return (dispatch) => {
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      const uid = currentUser.uid;

      // Get the refID and value seperately
      const newVal = item.slice();
      newVal.splice(3, 1);

      // Update to cart
      firebase.database().ref(`/users/${uid}/inCart/${item[3]}`).set(newVal).then(() => {
        // Handle update item successfully
        dispatch({
          type: PUR_UPDATE_ITEM_IN_CART,
          payload: item
        })
      }).catch((e) => {
        // Handle update item unsuccessfully
        console.log(e);
      });
    }
  }
}

export const purPlaceOrder = (inCart) => {
  return (dispatch) => {
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      const uid = currentUser.uid;

      const orderDate = new Date()
      let deliveryDate = new Date();
      deliveryDate.setDate(orderDate.getDate() + 7)
      
      const orderId = Math.floor(Math.random() * 900000000) + 100000000;
      const newOrder =
      {
        items: inCart.map((item) => item.slice(0, 3)),
        orderDate: orderDate.toDateString(),
        deliveryDate: deliveryDate.toDateString()
      }

      // Update to firebase
      firebase.database().ref(`/users/${uid}/orders/${orderId}`).set(newOrder).then(() => {
        dispatch({
          type: PUR_PLACE_ORDER,
          payload: newOrder
        })

      }).catch((e) => {
        // Handle error here

        console.log(e)
      })
    }
  }
}

export const purAddToWishlist = (itemTag, qty, size) => {

}
