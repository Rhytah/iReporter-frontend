import signInReducer from '../../../storeRedux/reducers/auth/loginReducer';
import * as loginActions from '../../../storeRedux/actions/auth/loginActions';

const initialState = {};
const newUser = {
  username: 'username',
  password: 'password',
};

it('should login a user when passed LOGIN_SUCCESS', () => {
  const action = loginActions.LoginUserSuccess(newUser);

  const newState = signInReducer(initialState, action);
  expect(newState.user).toEqual(newUser);
});

it('should add errors when passed LOGIN_FAILURE', () => {
  const error = {
    password: 'password should not be empty',
    usrename: 'username should not be empty',
  };
  const action = loginActions.LoginUserFailure(error);
  const newState = signInReducer(initialState, action);
  expect(newState.errors).toEqual(error);
});

it('should set loggingIn to true when passed LOGIN_REQUEST', () => {
  const action = loginActions.LoginUserRequest();
  const newState = signInReducer(initialState, action);
  expect(newState.logginIn).toEqual(true);
});
