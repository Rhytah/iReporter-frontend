import React from 'react';
import { shallow } from 'enzyme';
import { LoginModal } from '../../../components/auth/login';
import Login from '../../../components/auth/login/Login';

function renderLoginModal(args) {
  const defaultProps = {
    actions: {
      loginInUser: jest
        .fn()
        .mockResolvedValue({ data: { message: 'Login was successfull' } }),
    },
    loginState: {},
  };
  const props = { ...defaultProps, ...args };
  return shallow(<LoginModal {...props} />);
}

function renderLogin(args) {
  const defaultProps = {
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
    password: '',
    username: '',
    logInState: false,
  };
  const props = { ...defaultProps, ...args };
  return shallow(<Login {...props} />);
}

describe('Login component ', () => {
  const wrapper = renderLogin();

  it('component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('LoginModal Component', () => {
  const wrapper = renderLoginModal();
  const wrapperInst = wrapper.instance();

  it('should handle input change', () => {
    const event = {
      target: {
        name: 'username',
        value: 'fred',
      },
      preventDefault: jest.fn(),
    };
    wrapperInst.handleChange(event);
    expect(wrapperInst.state.username).toBe('fred');
  });

  it('should handle login', () => {
    wrapper.setState({
      username: 'fred',
      password: 'password',
    });

    expect(wrapperInst.state.username).toBe('fred');
    expect(wrapperInst.state.password).toBe('password');

    const event = {
      target: {
        type: 'submit',
      },
      preventDefault: jest.fn(),
    };
    wrapperInst.handleSubmit(event);
    expect(wrapperInst.props.actions.loginInUser).toBeCalled();
  });
});
