import axios from 'axios';
import { RegistrationConstants } from './actionTypes';

export const registerUserSuccess = successMessage => ({
  type: RegistrationConstants.REGISTER_SUCCESS,
  payload: successMessage,
});

export const registerUserFail = errorMessage => ({
  type: RegistrationConstants.REGISTER_FAILURE,
  payload: errorMessage,
});

export const registerRequest = () => ({
  type: RegistrationConstants.REGISTER_REQUEST,
});

export const registerUser = newUser => (dispatch) => {
  dispatch(registerRequest());
  return axios
    .post(
      'https://ireporter-backend-rhytah.herokuapp.com/api/v2/auth/signup',
      newUser,
    )
    .then((response) => {
      dispatch({
        type: RegistrationConstants.REGISTER_SUCCESS,
        payload: response.data,
      });
      return Promise.resolve(response.data);
    })
    .catch(({ response }) => {
      dispatch({
        type: RegistrationConstants.REGISTER_FAILURE,
        payload: response.data.errors,
      });
      return Promise.reject(response.data.error);
    });
};
