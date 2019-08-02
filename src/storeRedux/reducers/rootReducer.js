import { combineReducers } from 'redux';
import userReducer from './auth/authReducer';
import signInReducer from './auth/loginReducer';

export default combineReducers({
  user: userReducer,
  signInReducer,
});
