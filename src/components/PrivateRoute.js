import React from 'react';
import { Route, Redirect } from 'react-router';

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render = { props =>
      fakeAuth.isAuthenticated ? 
      (<Component {...props} />) : 
      (<Redirect to={{pathname: "/login"}} />)
      // (<Redirect to='/login' />)
    }
  />
);

export default PrivateRoute;