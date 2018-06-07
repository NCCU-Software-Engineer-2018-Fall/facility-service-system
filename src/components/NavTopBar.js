import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, } from 'reactstrap';
import { connect } from 'react-redux';

import '../styles/NavTopBar.css';
import NavTopBarOption from './NavTopBarOption';
import MonthControlWidget from '../containers/MonthControlWidget';
import WeekControlWidget from '../containers/WeekControlWidget';

const NavTopBar = (props) => {
  return (
    <Navbar color="light" light className="nav-top-bar">
      <Link to="/system" className="navbar-brand">場地租借系統</Link>
      
      <Switch>
        <Route exact path="/system" />
        <Route component={NavTopBarOption} />
      </Switch>

      <Switch>
        <Route exact path="/system" />
        <Route path="/time/month" component={MonthControlWidget} />
        <Route path="/time/week" component={WeekControlWidget} />
        <Route path="/time" component={MonthControlWidget} />
      </Switch>
      
      <Nav className="ml-auto">
        <NavItem>
          <a className="nav-link">
            {props.studentName}
          </a>
        </NavItem>
        <NavItem onClick={() => {
          props.logOut();
        }}>
          <Link className="nav-link" to="/login">
            登出
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
};

const mapStateToProps = (state) => {
  return {
    studentId: state.loginReducer.studentId
  }
}

export default connect(mapStateToProps)(NavTopBar);
