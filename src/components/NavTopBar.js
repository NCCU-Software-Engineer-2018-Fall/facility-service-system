import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import '../styles/NavTopBar.css';

class NavTopBar extends Component {
  render() {
    return (
      <Navbar color="light" light className="nav-top-bar">
        <Link to='/'><NavbarBrand>場地租借系統</NavbarBrand></Link>
        <Nav className="mr-auto">

          <NavLink>
            <Link to="/room">
                依教室查詢
            </Link>
          </NavLink>

          <NavLink>
            <Link to="/time">
              依時間查詢
            </Link>
          </NavLink>

          <NavLink>
            <Link to="/user">
              我的借用
            </Link>
          </NavLink>

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
