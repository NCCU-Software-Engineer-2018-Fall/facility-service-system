import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './NavTopBar.css';

class NavTopBar extends Component {
  render() {
    return (
      <Navbar color="light" light className="nav-top-bar">
        <NavbarBrand href="/">場地租借系統</NavbarBrand>
        <Nav className="mr-auto">
          <NavItem>
            <NavLink href="/user">
              依教室查詢
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/user">
              依時間查詢
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/user">
              我的借用
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink href="/user">
              使用者
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavTopBar;
