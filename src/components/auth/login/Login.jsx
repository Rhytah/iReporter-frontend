import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/Login.css';

const Login = (props) => {
  const {
    handleChange, password, username, handleSubmit,
  } = props;
  console.log(props, 'hjjhj========>');
  return (
    <React.Fragment>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src="https://www.tsafindia.org/assets/images/signin.png" id="icon" alt="User Icon" />
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              placeholder="username"
              required="required"
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              placeholder="Password"
              required="required"
              onChange={handleChange}
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
          <div id="formFooter">
            <a className="underlineHover" href="/">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Login;
