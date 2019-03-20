import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import UserReducers from './UserReducers';
import FilterReducers from './FilterReducers';

export default combineReducers({
  AuthReducers,
  UserReducers,
  FilterReducers
})