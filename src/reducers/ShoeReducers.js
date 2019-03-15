import {
  INPUT_EMAIL,
  INPUT_PASSWORD,
  INPUT_CONFIRM_PASSWORD
} from '../constants';

const INITIAL_STATE = {
  inputEmail: "",
  inputPassword: "",
  inputConfirmPassword: ""
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
    default:
      return state;
  }
}
