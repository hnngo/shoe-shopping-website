import firebase from 'firebase/app';
import 'firebase/auth';
import {
  AUTH_WAITING_FOR_SIGNIN,
  AUTH_SUCCESSFULLY,
  AUTH_UNSUCCESSFULLY,
  AUTH_RESET_INFORMATION,
  AUTH_CREATING_ACCOUNT,
  AUTH_CREATE_SUCCESSFULLY,
  AUTH_CREATE_UNSUCCESSFULLY,
  AUTH_SIGN_OUT_SUCCESSFULLY,
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
      }).catch(() => {
        // Handle error login
        dispatch({
          type: AUTH_UNSUCCESSFULLY
        })
      });
  }
}

export const authCreateAccountWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch({ type: AUTH_CREATING_ACCOUNT });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({
          type: AUTH_CREATE_SUCCESSFULLY
        })
      }).catch(() => {
        dispatch({
          type: AUTH_CREATE_UNSUCCESSFULLY
        })
      });
  }
}

export const authSignOut = () => {
  return (dispatch) => {
    firebase.auth().signOut().then(() => dispatch({
      type: AUTH_SIGN_OUT_SUCCESSFULLY
    })).catch((e) => console.log(e));
  }
}
