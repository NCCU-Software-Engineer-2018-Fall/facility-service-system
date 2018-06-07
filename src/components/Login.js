import React from 'react';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { setLogin } from '../actions/loginAction';
import store from '../store';

import { fakeAuth } from './PrivateRoute';
import { Card, CardHeader, CardBody, Button, Row, Col,
Form, Label, Input } from 'reactstrap';
import '../styles/Login.css';


class Login extends React.Component {
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
            <Button onClick={() => {
                const studentId = document.forms["login"]["studentId"];
                this.props.authenticate(studentId.value);
            }}>Log in</Button>
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