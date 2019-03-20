import {
  FILTER_PRODUCTS
} from '../constants';

export const filterProducts = (filterContent) => {
  return {
    type: FILTER_PRODUCTS,
    payload: filterContent
  }
};
