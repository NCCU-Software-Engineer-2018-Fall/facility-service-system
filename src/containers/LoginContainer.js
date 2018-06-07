import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login';
import { setLogin } from '../actions/loginAction';
import { getAllUser } from '../api';

class LoginContainer extends Component {
  authenticate = (studentId) => {
    getAllUser()
      .then(doc => {
        for(let user of doc.data) {
          console.log('inininini');
          if(user.student_id === studentId) {
            console.log(user.id);
            this.props.setLogin(user.student_name, user.student_id, user.id, true);
            break;
          }
        }
      })
  }

  render() {
    return (
      <Login islogin={this.props.isLogin} authenticate={this.authenticate} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.loginReducer.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (studentName, studentId, userId, isLogin) => {
      dispatch(setLogin(studentName, studentId, userId, isLogin));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
