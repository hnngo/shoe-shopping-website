import { combineReducers } from 'redux';
import ShoeReducers from './ShoeReducers';
import UserReducers from './UserReducers';

export default combineReducers({
  ShoeReducers,
  UserReducers
})