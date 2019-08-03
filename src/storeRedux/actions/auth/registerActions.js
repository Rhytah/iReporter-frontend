import axios from 'axios';
import { RegistrationConstants } from './actionTypes';
import history from '../../../utils/history';

export function registerUserSuccess(successMessage) {
  return {
    type: RegistrationConstants.REGISTER_SUCCESS,
    payload: successMessage,
  };
}

export function registerUserFail(errorMessage) {
  return {
    type: RegistrationConstants.REGISTER_FAILURE,
    payload: errorMessage,
  };
}

export function registerRequest() {
  return {
    type: RegistrationConstants.REGISTER_REQUEST,
  };
}

export function registerUser(newUser) {
  // eslint-disable-next-line func-names
  return function (dispatch) {
    dispatch(registerRequest());
    return axios
      .post('https://ireporter-backend-rhytah.herokuapp.com/api/v2/auth/signup', newUser, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        dispatch(registerUserSuccess(response.data));
        history.push('/login');
      })
      .catch((error) => {
        dispatch(registerUserFail(error.response.data));
      });
  };
}
