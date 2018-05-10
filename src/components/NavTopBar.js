import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import './NavTopBar.css';

const NavTopBar = (props) => (
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
    <span className="navbar-text ml-auto time-info">
      <Button outline
        onClick={() => { 
          props.slideToRight();
          props.back(props.firstDate);
          setTimeout(() => {
            props.reset();
          }, 200);
        }}>
        <i className="fas fa-angle-left"></i>
      </Button>
      <span>{` ${props.firstDate.getFullYear()} 年 ${props.firstDate.getMonth() + 1} 月 `}</span>
      <Button outline
        onClick={() => {
          props.slideToLeft(); 
          props.forward(props.firstDate);
          setTimeout(() => {
            props.reset();
          }, 200);
        }}>
        <i className="fas fa-angle-right"></i>
      </Button>
    </span>
    <Nav className="ml-auto">
      <NavItem>
        <NavLink href="/user">
          使用者
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavTopBar;
