import firebase from 'firebase/app';
import 'firebase/auth';

export const authStoreLoginInformation = (input, type) => {
  return {
    type,
    payload: input
  }
}

export const authLoginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        // Handle first login initializing such as get saved carts
        console.log("Login Successfully")
      }).catch((e) => {
        // Handle error login
        console.log("Error login")
      })
  }
}

//TODO: Popup modal/alert to inform user of error login
