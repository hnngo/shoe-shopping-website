import {
  FILTER_PRODUCTS,
  FILTER_SEARCH_PRODUCTS
} from '../constants';

export const filterProducts = (filterContent) => {
  return {
    type: FILTER_PRODUCTS,
    payload: filterContent
  }
};

export const inputSearchKeys = (searchKeys) => {
  return {
    type: FILTER_SEARCH_PRODUCTS,
    payload: searchKeys
  }
}
