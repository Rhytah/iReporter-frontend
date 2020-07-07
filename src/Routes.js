import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import LandingPage from './components/Landing';
import history from './utils/history';
import LoginModal from './components/auth/login';
import SignUpForm from './components/auth/SignUpForm';
import Redflags from './components/redflags';
import SiderDemo from './components/IreporterHome';
import RedflagForm from './components/redflags/AddRedflag';
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
        <Route exact path="/sider" component={SiderDemo} />


        <PrivateRoute
          exact
          path="/redflags"
          component={Redflags}
          isAuthenticated={sessionStorage.getItem('isLoggedIn')}
        />
        <PrivateRoute
          exact
          path="/redflags/add"
          component={RedflagForm}
          isAuthenticated={sessionStorage.getItem('isLoggedIn')}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
