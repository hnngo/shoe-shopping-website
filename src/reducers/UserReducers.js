import {
  AUTH_SIGN_OUT_SUCCESSFULLY,
  AUTH_GET_INCART_ITEMS,
  PUR_ADDING_TO_CART,
  PUR_ADDING_TO_CART_SUCCESSFULLY,
  PUR_ADDING_TO_CART_UNSUCCESSFULLY,
  PUR_CLOSE_ATC_MODAL,
  PUR_REMOVE_FROM_CART
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
      let newCart = [];
      if (Object.keys(action.payload).length > 0) {
        Object.keys(action.payload).forEach((key, i) => {
          newCart.push(action.payload[key])
          newCart[i].push(key)
        })
      }
      return { ...state, inCart: newCart };
    case PUR_ADDING_TO_CART_SUCCESSFULLY:
      newCart = [ ...state.inCart, action.payload ];
      return {
        ...state,
        inCart: newCart,
        isSuccessfullyAdded: true,
        newItems: action.payload
      };
    case PUR_CLOSE_ATC_MODAL:
      return { ...state, isSuccessfullyAdded: undefined, newItems: null }
    case PUR_REMOVE_FROM_CART:
      newCart = state.inCart.filter((item) => item[3] !== action.payload);
      return { ...state, inCart: newCart };
    default:
      return state;
  }
}
