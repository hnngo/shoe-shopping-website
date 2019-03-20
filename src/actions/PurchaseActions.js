import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {
  PUR_ADDING_TO_CART,
  PUR_ADDING_TO_CART_SUCCESSFULLY,
  PUR_ADDING_TO_CART_UNSUCCESSFULLY,
  PUR_CLOSE_ATC_MODAL,
  PUR_REMOVE_FROM_CART
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

    if (currentUser !== null) {
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

    if (currentUser !== null) {
      const uid = currentUser.uid;

      firebase.database().ref(`/users/${uid}/inCart/${refID}`).remove().then(() => {
        // Handle remove item from cart successfully
        dispatch({
          type: PUR_REMOVE_FROM_CART,
          payload: refID
        })
      }).catch((e) => {
        // Handle remove item from cart unsuccessfully
        console.log(e);
      })
    }
  }
}

export const purAddToWishlist = (itemTag, qty, size) => {

}

//TODO: Fix adding too much item cannot show