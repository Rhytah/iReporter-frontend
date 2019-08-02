import { LoginActionTypes } from '../../actions/auth/actionTypes';
import { initialLoginState } from '../initialState';

const signInReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        logginIn: true,
        loggedIn: false,
      };
    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        logginIn: false,
      };
    case LoginActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        errors: action.payload,
        loggedIn: false,
        logginIn: false,
      };
    default:
      return state;
  }
};

export default signInReducer;
