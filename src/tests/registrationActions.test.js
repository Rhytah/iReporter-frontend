import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import * as registrationActions from '../storeRedux/actions/auth/registerActions';
import RegistrationConstants from '../storeRedux/actions/auth/actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

// describe('Async Actions', () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });

//   const newUser2 = {
//     email: 'email2@example.com',
//     username: 'username2',
//     password: 'password2',
//   };

//   describe('Register User Thunk', () => {
//     it('should begin api call and REGISTER_USER_SUCCESS when registering users', () => {
//       fetchMock.mock('*', {
//         body: newUser2,
//         headers: { 'content-type': 'application/json' },
//       });

//       const expectedAction = [
//         {
//           type: RegistrationConstants.REGISTER_REQUEST,
//           payload: newUser2,
//         },
//       ];

//       const store = mockStore({ newUser2 });
//       store.dispatch(registrationActions.registerUser(newUser2));
//       expect(store.getActions()).toEqual(expectedAction);
//     });
//   });
// });

describe('registerUserSuccess', () => {
  it('should create a REGISTER_USER_SUCCESS action', () => {
    const newUser = {
      email: 'email@example.com',
      username: 'username',
      password: 'password',
    };
    const expectedAction = {
      type: RegistrationConstants.REGISTER_SUCCESS,
      payload: newUser,
    };

    const action = registrationActions.registerUserSuccess(newUser);

    expect(action).toEqual(expectedAction);
  });
});

describe('registerUserFailure', () => {
  it('should create a REGISTER_FAILURE action', () => {
    const errors = {};
    const expectedAction = {
      type: RegistrationConstants.REGISTER_FAILURE,
      payload: errors,
    };

    const action = registrationActions.registerUserFail(errors);

    expect(action).toEqual(expectedAction);
  });
});
