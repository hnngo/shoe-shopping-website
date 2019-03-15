import {
  INPUT_EMAIL,
  INPUT_PASSWORD,
  INPUT_CONFIRM_PASSWORD,
  AUTH_WAITING_FOR_SIGNIN,
  AUTH_SUCCESSFULLY
} from '../constants';

const INITIAL_STATE = {
  inputEmail: "",
  inputPassword: "",
  inputConfirmPassword: "",
  isSigningIn: false,
  isSignInSuccessfully: undefined,
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case INPUT_EMAIL:
      return { ...state, inputEmail: action.payload };
    case INPUT_PASSWORD:
      return { ...state, inputPassword: action.payload };
    case INPUT_CONFIRM_PASSWORD:
      return { ...state, inputConfirmPassword: action.payload };
    case AUTH_WAITING_FOR_SIGNIN:
      return { ...state, isSigningIn: true };
    case AUTH_SUCCESSFULLY:
      return { ...state, isSignInSuccessfully: true }
    default:
      return state;
  }
}
