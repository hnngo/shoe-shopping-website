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

export const purAddToCart = (itemTag, qty, size, curInCart) => {
  return (dispatch) => {
    dispatch({ type: PUR_ADDING_TO_CART });
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      const uid = currentUser.uid;

      // Checking if a product is already exist in cart
      const existProducts = curInCart.filter((item) => {
        if (itemTag === item[0] && size === item[2]) {
          return true;
        }
        return false;
      });

      // If product already exists in the cart, then just update to firebase and local storage
      if (existProducts.length === 1) {
        // Alter the updated info
        const newVal = existProducts[0].slice(0, 3);
        newVal[1] += qty;
        const refID = existProducts[0][3];

        // Firebase side
        firebase.database().ref(`users/${uid}/inCart/${refID}`).set(newVal).then(() => {
          // Local storage side, true if it added to existed product and false for update from cart
          newVal.push(refID, true);
          dispatch({
            type: PUR_UPDATE_ITEM_IN_CART,
            payload: newVal
          });
        }).catch((e) => {
          console.log(e);
        });
      } else {
        // There is no exist products
        firebase.database().ref(`/users/${uid}/inCart`).push([itemTag, qty, size]).then((res) => {
          // Handle add to cart successfully
          dispatch({
            type: PUR_ADDING_TO_CART_SUCCESSFULLY,
            payload: [itemTag, qty, size, res.key]
          })
        }).catch(() => dispatch({
          // Handle add to cart unsuccessfully
          type: PUR_ADDING_TO_CART_UNSUCCESSFULLY
        }));
      }
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

      // Prepare order information
      const orderDate = new Date()
      let deliveryDate = new Date();
      deliveryDate.setDate(orderDate.getDate() + 7)

      const orderId = Math.floor(Math.random() * 900000000) + 100000000;
      const newOrder =
      {
        items: inCart.map((item) => item.slice(0, 3)),
        orderDate: orderDate.toLocaleTimeString() + ", " + orderDate.toDateString(),
        deliveryDate: deliveryDate.toDateString()
      }

      // Update to firebase
      firebase.database().ref(`/users/${uid}/orders/${orderId}`).set(newOrder).then(() => {
        // Remove incarts item on firebase
        firebase.database().ref(`/users/${uid}/inCart`).remove().then(() => {
          // Dispatch to local reducer to switch from inCart to order
          const payload = {}
          payload[orderId] = newOrder;

          dispatch({
            type: PUR_PLACE_ORDER,
            payload
          });
        });
      }).catch((e) => {
        // Handle error here
        console.log(e)
      })
    }
  }
}

export const purAddToWishlist = (itemTag, qty, size) => {

}
