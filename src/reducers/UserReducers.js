import {
  PUR_ADDING_TO_CART,
  PUR_ADDING_TO_CART_SUCCESSFULLY,
  PUR_ADDING_TO_CART_UNSUCCESSFULLY
} from '../constants';

const INITIAL_STATE = {
  inCart: [],
  inWishlist: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUR_ADDING_TO_CART_SUCCESSFULLY:
      return { ...state, inCart: state.inCart.push(action.payload) };
    default:
      return state;
  }
}
