import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import LandingPage from './components/Landing';
import history from './utils/history';
import LoginModal from './components/auth/login';
import SignUpForm from './components/auth/SignUpForm';
import Redflags from './components/redflags';
import AuthNavigation from './components/common/AuthNavigation';
import PrivateRoute from './utils/privateRoute';

function Routes() {
  return (
    <Router history={history}>
      <AuthNavigation />

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/login" component={LoginModal} />
        <PrivateRoute
          exact
          path="/redflags"
          component={Redflags}
          isAuthenticated={sessionStorage.getItem('isLoggedIn')}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
