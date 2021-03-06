import {
  INPUT_EMAIL,
  INPUT_PASSWORD,
  INPUT_CONFIRM_PASSWORD,
  AUTH_WAITING_FOR_SIGNIN,
  AUTH_SUCCESSFULLY,
  AUTH_UNSUCCESSFULLY,
  AUTH_RESET_INFORMATION,
  AUTH_CREATING_ACCOUNT,
  AUTH_CREATE_SUCCESSFULLY,
  AUTH_CREATE_UNSUCCESSFULLY,
  AUTH_SIGN_OUT_SUCCESSFULLY
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
  isCreating: false,
  isCreatingSuccessfully: undefined
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_EMAIL:
      const isValidinputEmail = validateEmail(action.payload)
      return {
        ...state,
        inputEmail: action.payload,
        isValidinputEmail,
        isSignInSuccessfully: undefined,
        isCreatingSuccessfully: undefined
      };
    case INPUT_PASSWORD:
      const isValidinputPassword = action.payload.length > 5;
      return {
        ...state,
        inputPassword: action.payload,
        isValidinputPassword,
        isSignInSuccessfully: undefined,
        isCreatingSuccessfully: undefined
      };
    case INPUT_CONFIRM_PASSWORD:
      const isValidinputConfirmPassword = state.inputPassword === action.payload;
      return {
        ...state,
        inputConfirmPassword: action.payload,
        isValidinputConfirmPassword,
        isSignInSuccessfully: undefined,
        isCreatingSuccessfully: undefined
      };
    case AUTH_WAITING_FOR_SIGNIN:
      return { ...state, isSigningIn: true, isSignInSuccessfully: undefined };
    case AUTH_SUCCESSFULLY:
      return { ...state, isSigningIn: false, isSignInSuccessfully: true };
    case AUTH_UNSUCCESSFULLY:
      return { ...INITIAL_STATE, isSignInSuccessfully: false };
    case AUTH_CREATING_ACCOUNT:
      return { ...state, isCreating: true, isCreatingSuccessfully: undefined };
    case AUTH_CREATE_SUCCESSFULLY:
      return { ...state, isCreating: false, isCreatingSuccessfully: true };
    case AUTH_CREATE_UNSUCCESSFULLY:
      return { ...INITIAL_STATE, isCreating: false, isCreatingSuccessfully: false };
    case AUTH_RESET_INFORMATION:
    case AUTH_SIGN_OUT_SUCCESSFULLY:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}
