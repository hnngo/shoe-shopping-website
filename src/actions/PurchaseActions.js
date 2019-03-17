import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {
  PUR_ADDING_TO_CART,
  PUR_ADDING_TO_CART_SUCCESSFULLY,
  PUR_ADDING_TO_CART_UNSUCCESSFULLY
} from '../constants';

export const purAddToCart = (itemTag, qty, size) => {
  return (dispatch) => {
    dispatch({ type: PUR_ADDING_TO_CART });
    const currentUser = firebase.auth().currentUser;

    if (currentUser !== null) {
      const uid = currentUser.uid;
      firebase.database().ref(`/users/${uid}/inCart`).push([itemTag, qty, size]).then(() => dispatch({
        // Handle add to cart successfully
        type: PUR_ADDING_TO_CART_SUCCESSFULLY,
        payload: [itemTag, qty, size]
      })).catch(() => dispatch({
        // Handle add to cart unsuccessfully
        type: PUR_ADDING_TO_CART_UNSUCCESSFULLY
      }))
    } else {
      //TODO: Warning Login here
    }
  }
}

export const purAddToWishlist = (itemTag, qty, size) => {

}