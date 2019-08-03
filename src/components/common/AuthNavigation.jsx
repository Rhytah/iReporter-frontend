import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../assets/css/AuthNavigation.css';

export class Navigation extends Component {
  state = {
    isLoggedIn: false,
  };

  componentWillMount() {
    if (sessionStorage.getItem('token')) {
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { loggedIn } = nextProps;
    // eslint-disable-next-line react/destructuring-assignment
    if (nextProps.loggedIn !== this.props.loggedIn) {
      this.setState({
        isLoggedIn: loggedIn,
      });
    }
  }

  handleLogout = () => {
    sessionStorage.removeItem('token');
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top"
        id="navigation"
      >
        <div className="container">
          <span>
            <Link className="navbar-brand" to="/">
              iReporter
            </Link>
          </span>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-custom">
              {!isLoggedIn ? (
                <Fragment>
                  <li
                    className="nav-item active"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <Link className="nav-link" to="/signup">
                      Register
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li
                    className="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <Link className="nav-link" to="/redflags">
                      Redflags
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    <Link className="nav-link" to="/login" onClick={this.handleLogout}>
                      Logout
                    </Link>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export const mapStateToProps = state => ({
  loggedIn: state.signInReducer.loggedIn,
});

Navigation.defaultProps = {
  loggedIn: false,
};

Navigation.propTypes = {
  loggedIn: PropTypes.bool,
};

export default connect(mapStateToProps)(Navigation);
