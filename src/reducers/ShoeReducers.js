import {
  INPUT_EMAIL,
  INPUT_PASSWORD,
  INPUT_CONFIRM_PASSWORD,
  AUTH_WAITING_FOR_SIGNIN,
  AUTH_SUCCESSFULLY,
  AUTH_UNSUCCESSFULLY,
  AUTH_RESET_INFORMATION
} from '../constants';

const INITIAL_STATE = {
  inputEmail: "",
  inputPassword: "",
  inputConfirmPassword: "",
  isValidinputEmail: undefined,
  isValidinputPassword: undefined,
  isValidinputConfirmPassword: undefined,
  isSigningIn: false,
  isSignInSuccessfully: undefined,
}

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case INPUT_EMAIL:
      const isValidinputEmail = validateEmail(action.payload)
      return {
        ...state,
        inputEmail: action.payload,
        isValidinputEmail,
        isSignInSuccessfully: undefined
      };
    case INPUT_PASSWORD:
      const isValidinputPassword = action.payload.length > 5;
      return {
        ...state,
        inputPassword: action.payload,
        isValidinputPassword,
        isSignInSuccessfully: undefined
      };
    case INPUT_CONFIRM_PASSWORD:
      const isValidinputConfirmPassword = state.inputPassword === action.payload;
      return {
        ...state,
        inputConfirmPassword: action.payload,
        isValidinputConfirmPassword,
        isSignInSuccessfully: undefined
      };
    case AUTH_WAITING_FOR_SIGNIN:
      return { ...state, isSigningIn: true,  isSignInSuccessfully: undefined };
    case AUTH_SUCCESSFULLY:
      return { ...state, isSigningIn: false, isSignInSuccessfully: true };
    case AUTH_UNSUCCESSFULLY:
      return { ...INITIAL_STATE, isSignInSuccessfully: false };
    case AUTH_RESET_INFORMATION:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

//TODO: Remove info when login successfully
