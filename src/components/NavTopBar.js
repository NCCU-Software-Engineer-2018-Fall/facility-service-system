import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import '../styles/NavTopBar.css';
import NavTopBarOption from './NavTopBarOption';
import MonthControlWidget from '../containers/MonthControlWidget';

const NavTopBar = (props) => {
  return (
    <Navbar color="light" light className="nav-top-bar">
      <NavbarBrand href="/">場地租借系統</NavbarBrand>

      <Switch>
        <Route exact path="/system" />
        <Route component={NavTopBarOption} />
      </Switch>

      <Switch>
        <Route exact path="/system" />
        <Route path="/time/month" component={MonthControlWidget} />
        <Route path="/time/week" />
        <Route path="/time" component={MonthControlWidget} />
      </Switch>
      
      <Nav className="ml-auto">
        <NavItem>
          <NavLink href="/user">
            使用者
        </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
};

export default NavTopBar;
