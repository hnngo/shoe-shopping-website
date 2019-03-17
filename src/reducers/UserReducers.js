import {
  PUR_ADDING_TO_CART,
  PUR_ADDING_TO_CART_SUCCESSFULLY,
  PUR_ADDING_TO_CART_UNSUCCESSFULLY,
  PUR_CLOSE_ATC_MODAL
} from '../constants';

const INITIAL_STATE = {
  inCart: [],
  inWishlist: [],
  isSuccessfullyAdded: undefined
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUR_ADDING_TO_CART_SUCCESSFULLY:
      const newCart = [ ...state.inCart, action.payload ];
      return { ...state, inCart: newCart, isSuccessfullyAdded: true };
    case PUR_CLOSE_ATC_MODAL:
      return { ...state, isSuccessfullyAdded: undefined }
    default:
      return state;
  }
}
