/* eslint-disable camelcase */
/* eslint-disable max-len */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as registrationActions from '../../storeRedux/actions/auth/registerActions';
import Input from './Input';
import Button from './Button';
import displayToast from '../../utils/toast';

export class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: '',
      firstnameError: '',
      lastnameError: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
      confirmpassword: '',
      confirmPasswordError: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.validateFormData = this.validateFormData.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.validateFormData();
      },
    );
  }

  validateFormData() {
    const {
      email, username, password, confirmpassword,
    } = this.state;

    // eslint-disable-next-line no-useless-escape
    const passwordValidation = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})',
    );
    // eslint-disable-next-line no-useless-escape
    const usernameValidation = new RegExp('^([a-zA-Zd]+[-_])*[a-zA-Zd*]+$');

    this.setState({
      emailError:
        email.length > 3 ? null : 'Email must be longer than 3 characters',
      usernameError:
        username > 3 || usernameValidation.test(username)
          ? null
          : 'Username should be 4 characters and cannot be integers, have white spaces or symbol',
      passwordError: passwordValidation.test(password)
        ? null
        : 'Password should be at least 6 characters with atleast a number, capital and small letter.',
      confirmPasswordError:
        confirmpassword === password ? null : "Passwords don't match",
    });
  }

  submitForm(event) {
    event.persist();
    event.preventDefault();
    const {
      email, username, password, firstname, lastname,
    } = this.state;
    const { actions } = this.props;
    const newUser = {
      email,
      username,
      password,
      firstname,
      lastname,
    };
    actions
      .registerUser(newUser)
      .then((response) => {
        const { history } = this.props;
        Notify.success(response.data.message);
        this.handleClearForm(event);
        history.push('/login');
      })
      .catch(error => Notify.error(error));
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: '',
      confirmpassword: '',
    });
  }

  render() {
    const {
      firstname,
      lastname,
      username,
      password,
      email,
      firstnameError,
      lastnameError,
      usernameError,
      emailError,
      passwordError,
      confirmpassword,
      confirmPasswordError,
    } = this.state;

    const { user } = this.props;

    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="https://www.tsafindia.org/assets/images/signin.png"
              id="icon"
              alt="User Icon"
            />
          </div>
          <form onSubmit={this.submitForm}>
            <h2 className="text-center">
              <strong>Create </strong>
              an account
            </h2>
            <Input
              name="firstname"
              type="text"
              placeholder="First Name"
              value={firstname}
              handleChange={this.handleChange}
              onBlur={this.validateFormData}
              className={`form-control ${firstnameError ? 'is-invalid' : ''}`}
              fieldError={firstnameError}
            />
            <Input
              name="lastname"
              type="text"
              placeholder="Last Name"
              value={lastname}
              handleChange={this.handleChange}
              onBlur={this.validateFormData}
              className={`form-control ${lastnameError ? 'is-invalid' : ''}`}
              fieldError={lastnameError}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              handleChange={this.handleChange}
              onBlur={this.validateFormData}
              className={`form-control ${emailError ? 'is-invalid' : ''}`}
              fieldError={emailError}
            />
            <Input
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              handleChange={this.handleChange}
              onBlur={this.validateFormData}
              className={`form-control ${usernameError ? 'is-invalid' : ''}`}
              fieldError={usernameError}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              handleChange={this.handleChange}
              onBlur={this.validateFormData}
              className={`form-control ${passwordError ? 'is-invalid' : ''}`}
              fieldError={passwordError}
            />
            <Input
              name="confirmpassword"
              type="password"
              placeholder="Password (Confirm)"
              value={confirmpassword}
              handleChange={this.handleChange}
              onBlur={this.validateFormData}
              className={`form-control ${
                confirmPasswordError ? 'is-invalid' : ''
              }`}
              fieldError={confirmPasswordError}
            />
            <div className="form-group">
              <Link to="/" className="already">
                Changed your mind? Cancel registration.
              </Link>
            </div>
            {user.registering && <div>Creating Account...</div>}
            <Button className="btn btn-primary">Signup</Button>
            <Link to="/login" className="already">
              You already have an account? Login here.
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  actions: PropTypes.shape({ registerUser: PropTypes.func }).isRequired,
  user: PropTypes.shape({ registerUser: PropTypes.func }).isRequired,
};

export const mapStateToProps = state => ({
  user: state.user,
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(registrationActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
