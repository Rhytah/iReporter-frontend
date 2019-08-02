import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import LandingPage from './components/Landing';
import history from './utils/history';
import LoginModal from './components/auth/login';
import { SignUpForm } from './components/auth/SignUpForm';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginModal} />
        <Route exact path="/signup" component={SignUpForm} />
      </Switch>
    </Router>
  );
}

export default Routes;
