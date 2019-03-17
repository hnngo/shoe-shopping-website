import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import UserReducers from './UserReducers';

export default combineReducers({
  AuthReducers,
  UserReducers
})