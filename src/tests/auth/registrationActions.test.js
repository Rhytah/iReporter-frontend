import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import * as registrationActions from '../../storeRedux/actions/auth/registerActions';
import { RegistrationConstants } from '../../storeRedux/actions/auth/actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Register action testing', () => {
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  const data = {
    username: 'username',
    password: 'password',
  };

  it('should register a user', () => {
    const responseData = {
      data: [{}],
      status: 200,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ response: responseData });
    });

    const expectedAction = [
      {
        type: RegistrationConstants.REGISTER_REQUEST,
      },
      {
        payload: responseData,
        type: RegistrationConstants.REGISTER_SUCCESS,
      },
    ];

    const store = mockStore({});
    return store.dispatch(registrationActions.registerUser(data)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('Register should fail with existing email', () => {
    const responseData = {
      error: {
        error: 'User already exists',
      },
      status: 400,
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ response: responseData });
    });

    const expectedAction = [
      {
        type: RegistrationConstants.REGISTER_REQUEST,
      },
      {
        type: RegistrationConstants.REGISTER_SUCCESS,
        payload: responseData,
      },
    ];

    const store = mockStore({});
    return store.dispatch(registrationActions.registerUser(data)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
