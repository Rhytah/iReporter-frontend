import axios from 'axios';
import { LoginActionTypes } from './actionTypes';

export const LoginUserSuccess = successMessage => ({
  type: LoginActionTypes.LOGIN_SUCCESS,
  payload: successMessage,
});

export const LoginUserFailure = errorMessage => ({
  type: LoginActionTypes.LOGIN_FAILURE,
  payload: errorMessage,
});

export const LoginUserRequest = () => ({
  type: LoginActionTypes.LOGIN_REQUEST,
});

const BackendLoginUrl = 'https://ireporter-backend-rhytah.herokuapp.com/api/v2/auth/login/';

export const loginInUser = userData => (dispatch) => {
  dispatch(LoginUserRequest());
  return axios
    .post(`${BackendLoginUrl}`, userData)
    .then((response) => {
      sessionStorage.setItem('token', response.data.token);
      dispatch(LoginUserSuccess(response.data));
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      dispatch(LoginUserFailure(error.response.data));
      return Promise.reject(error.response.data);
    });
};
