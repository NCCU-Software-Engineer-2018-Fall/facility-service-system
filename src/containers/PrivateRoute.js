import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect,withRouter } from 'react-router';

class PrivateRoute extends Component {
  render() {
    let Component = this.props.component;
    return (
      <Route path={this.props.path}
        render={(props) => 
          this.props.isLogin ?
            <Component {...props} /> : <Redirect to={{ pathname: "/login" }} />
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.loginReducer.isLogin
  }
}

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
