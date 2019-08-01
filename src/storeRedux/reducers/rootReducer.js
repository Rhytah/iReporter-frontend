import { combineReducers } from 'redux';
import userReducer from './auth/authReducer';

export default combineReducers({
  user: userReducer,
});
