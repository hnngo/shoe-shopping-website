import {
  AUTH_SIGN_OUT_SUCCESSFULLY,
  AUTH_GET_INCART_ITEMS,
  PUR_ADDING_TO_CART,
  PUR_ADDING_TO_CART_SUCCESSFULLY,
  PUR_ADDING_TO_CART_UNSUCCESSFULLY,
  PUR_CLOSE_ATC_MODAL
} from '../constants';

const INITIAL_STATE = {
  inCart: [],
  inWishlist: [],
  newItems: null,
  isSuccessfullyAdded: undefined
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGN_OUT_SUCCESSFULLY: 
      return { ...INITIAL_STATE };
    case AUTH_GET_INCART_ITEMS:
      return {
        ...state,
        inCart: action.payload ? action.payload : []
      }
    case PUR_ADDING_TO_CART_SUCCESSFULLY:
      let newCart = [ ...Object.values(state.inCart), action.payload ];
      return { ...state, inCart: newCart, isSuccessfullyAdded: true, newItems: action.payload };
    case PUR_CLOSE_ATC_MODAL:
      return { ...state, isSuccessfullyAdded: undefined, newItems: null }
    default:
      return state;
  }
}
