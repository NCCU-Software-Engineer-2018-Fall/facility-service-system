import React from 'react';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { setLogin, initLogin } from '../actions/loginAction';
import store from '../store';

import { loadState } from '../localstorage';
import { fakeAuth } from './PrivateRoute';
import { Card, CardHeader, CardBody, Button, Row, Col,
Form, Label, Input } from 'reactstrap';
import '../styles/Login.css';


class Login extends React.Component {

  login = (e) => {
    e.preventDefault()
    const studentId = document.forms["login"]["studentId"]
    if (studentId.value == '' || isNaN(studentId.value) || studentId.value.length !== 9){ 
      alert('輸入格式錯誤(9位數字)')
      studentId.value = ''
      return
    }

    fakeAuth.authenticate(() => {
      this.props.setLogin(studentId.value, true)
    });
  };

  render() {
    if (this.props.isLogin) {
      return <Redirect to="/system" />;
    }

    return (
      <div>
        <Row className="login-modal">
        <Col md={{size: 4, offset: 4}}>
          <Card>
            <CardHeader>登入</CardHeader>
            <CardBody>
              <Form name="login" onSubmit={this.login}>
                  <Label for="stuentId">學號</Label>
                  <Input type="text" id="studentId" name="stuentId" defaultValue="104306037"></Input>
              </Form>
            </CardBody>
              <Button type="submit" onClick={this.login}>Log in</Button>
          </Card>
        </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentId: state.loginReducer.studentId,
    isLogin: state.loginReducer.isLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (studentId, isLogin) => {
      dispatch(setLogin(studentId, isLogin))
    },
    initLogin: () => {
      dispatch(initLogin())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// const loginState = JSON.parse(localStorage.getItem('loginState')) || ''
// if (loginState) {
//   const studentId = loginState.studentId
//   const isLogin = loginState.isLogin
//   const re = setLogin(studentId, isLogin)     
// }