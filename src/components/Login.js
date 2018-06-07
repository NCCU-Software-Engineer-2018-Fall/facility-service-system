import React from 'react';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { setLogin } from '../actions/loginAction';

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
              <Form name="login">
                  <Label for="stuentId">學號</Label>
                  <Input type="text" id="studentId" name="stuentId"></Input>
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

const logState = (state) => {
  return {
    studentId: state.loginReducer.studentId,
    isLogin: state.loginReducer.isLogin
  };
};

const logDispatch = (dispatch) => {
  return {
    setLogin: (studentId, isLogin) => {
      dispatch(setLogin(studentId, isLogin))
    }
  }
}

export default connect(logState, logDispatch)(Login);