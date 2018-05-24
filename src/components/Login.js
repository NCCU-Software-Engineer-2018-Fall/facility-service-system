import React from 'react';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { setLogin } from '../actions/loginAction';

import { fakeAuth } from './PrivateRoute';
import { Card, CardHeader, CardBody, Button, Row, Col,
Form, Label, Input } from 'reactstrap';
import '../styles/Login.css';


class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      studentId: '',
      redirectToReferrer: false
    }
  }

  login = () => {
    const studentId = document.forms["login"]["studentId"]
    if (studentId.value == '' || isNaN(studentId.value) || studentId.value.length !== 9){ 
      alert('輸入格式錯誤(9位數字)')
      studentId.value = ''
      return
    }

    fakeAuth.authenticate(() => {
      this.setState({ 
        studentId: studentId.value,
        redirectToReferrer: true
      });
      // console.log(this.state.studentId, this.state.redirectToReferrer);
      localStorage.setItem(this.state.studentId, this.state.redirectToReferrer)
    });
  };

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
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
            <Button onClick={this.login}>Log in</Button>
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