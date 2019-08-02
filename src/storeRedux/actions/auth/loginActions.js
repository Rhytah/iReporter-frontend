import axios from 'axios';
import { LoginActionTypes } from './actionTypes';
import { dispalyToast } from '../../../utils/toast';
import history from '../../../utils/history';

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

      dispalyToast('You have successfully logged In!');
      dispatch(LoginUserSuccess(response.data));

      history.push('/');
    })
    .catch((error) => {
      dispalyToast('Username or email does not exist!', 'error');
      dispatch(LoginUserFailure(error.response.data));
    });
};
