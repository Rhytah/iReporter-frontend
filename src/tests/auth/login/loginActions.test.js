import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import * as loginActions from '../../../storeRedux/actions/auth/loginActions';
import { LoginActionTypes } from '../../../storeRedux/actions/auth/actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('login action testing', () => {
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  const data = {
    username: 'username',
    password: 'password',
  };

  it('should login a user', () => {
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
        type: LoginActionTypes.LOGIN_REQUEST,
      },
      {
        payload: responseData,
        type: LoginActionTypes.LOGIN_SUCCESS,
      },
    ];

    const store = mockStore({});
    return store.dispatch(loginActions.loginInUser(data)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('login should fail with wrong password', () => {
    const responseData = {
      errors: {
        password: ['Wrong password'],
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 400, response: responseData });
    });

    const expectedAction = [
      {
        type: LoginActionTypes.LOGIN_REQUEST,
      },
      {
        payload: responseData,
        type: LoginActionTypes.LOGIN_FAILURE,
      },
    ];

    const store = mockStore({});
    return store.dispatch(loginActions.loginInUser(data)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
