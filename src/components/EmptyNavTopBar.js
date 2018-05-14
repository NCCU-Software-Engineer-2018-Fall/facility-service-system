import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import '../styles/NavTopBar.css';

const EmptyNavTopBar = () => (
  <Navbar color="light" light className="nav-top-bar">
    <NavbarBrand href="/">場地租借系統</NavbarBrand>
    <Nav className="ml-auto">
      <NavItem>
        <NavLink href="/user">
          使用者
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default EmptyNavTopBar;
