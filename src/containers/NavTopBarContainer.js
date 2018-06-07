import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavTopBar from '../components/NavTopBar';
import { logOut } from '../actions/loginAction';

class NavTopBarContainer extends Component {
  render() {
    return (
      <NavTopBar studentName={this.props.studentName} logOut={this.props.logOut}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentName: state.loginReducer.studentName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch(logOut());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavTopBarContainer);
