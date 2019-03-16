import firebase from 'firebase/app';
import 'firebase/auth';
import {
  AUTH_WAITING_FOR_SIGNIN,
  AUTH_SUCCESSFULLY,
  AUTH_UNSUCCESSFULLY,
  AUTH_RESET_INFORMATION
} from '../constants';

export const authStoreLoginInformation = (input, type) => {
  return {
    type,
    payload: input
  };
}

export const authResetLoginInformation = () => {
  return {
    type: AUTH_RESET_INFORMATION
  };
}

export const authLoginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    // Dispatch action signing in to prevent inputing and show activity indicator
    dispatch({ type: AUTH_WAITING_FOR_SIGNIN });

    // Login Session
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        // Handle first login initializing such as get saved carts
        dispatch({
          type: AUTH_SUCCESSFULLY
        })
      }).catch((e) => {
        // Handle error login
        dispatch({
          type: AUTH_UNSUCCESSFULLY
        })
      })
  };
}

//TODO: Popup modal/alert to inform user of error login
