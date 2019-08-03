import { combineReducers } from 'redux';
import userReducer from './auth/authReducer';
import signInReducer from './auth/loginReducer';
import redflagsReducer from './redflags';

export default combineReducers({
  user: userReducer,
  signInReducer,
  redflagsReducer,
});
