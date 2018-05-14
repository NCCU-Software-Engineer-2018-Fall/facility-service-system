import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import '../styles/NavTopBar.css';

const NavTopBar = (props) => {
  let year = props.firstDate.getFullYear();
  let month = props.firstDate.getMonth();
  let backYear = year;
  let backMonth = month - 1;
  let forwardYear = year;
  let forwardMonth = month + 1;
  if(forwardMonth === 12) {
    forwardYear++;
    forwardMonth = 0;
  }
  if(backMonth === -1) {
    backYear--;
    backMonth = 11;
  }
  return (
    <Navbar color="light" light className="nav-top-bar">
      <NavbarBrand href="/">場地租借系統</NavbarBrand>
      <Nav className="mr-auto">
        <NavItem>
          <Link className="nav-link" to="/room">
            依教室查詢
        </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/time">
            依時間查詢
        </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/user">
            我的借用
        </Link>
        </NavItem>
      </Nav>
      <span className="navbar-text ml-auto time-info">
        <Link to={`/time/month/${backYear}/${backMonth + 1}/1`}>
          <Button outline
            onClick={() => {
              props.slideToRight();
              setTimeout(() => {
                props.reset();
              }, 200);
            }}>
            <i className="fas fa-angle-left"></i>
          </Button>
        </Link>
        <span>{` ${props.firstDate.getFullYear()} 年 ${props.firstDate.getMonth() + 1} 月 `}</span>
        <Link to={`/time/month/${forwardYear}/${forwardMonth + 1}/1`}>
        <Button outline
          onClick={() => {
            props.slideToLeft();
            setTimeout(() => {
              props.reset();
            }, 200);
          }}>
          <i className="fas fa-angle-right"></i>
        </Button>
        </Link>
      </span>
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

export default withRouter(NavTopBar);
