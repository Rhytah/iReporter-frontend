/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './Login';
import * as loginActions from '../../../storeRedux/actions/auth/loginActions';

export class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { actions } = this.props;
    const userData = this.state;

    actions
      .loginInUser(userData)
      .then((data) => {
        Notify.success(data.message);
        this.props.history.push('/');
      })
      .catch((response) => {
        Notify.error(response.error);
      });
  };

  render() {
    const { username, password } = this.state;

    return (
      <Login
        username={username}
        password={password}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

LoginModal.propTypes = {
  actions: PropTypes.shape({ loginInUser: PropTypes.func }).isRequired,
};

export const mapStateToProps = state => ({
  loginSate: state.signInReducer,
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginModal);
