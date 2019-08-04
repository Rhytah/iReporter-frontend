import { combineReducers } from 'redux';
import userReducer from './auth/authReducer';
import signInReducer from './auth/loginReducer';
import redflags from './redflags';

export default combineReducers({
  user: userReducer,
  signInReducer,
  redflags,
});
