import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from "react-router-dom";

const NavTopBarOption = () => (
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
);

export default NavTopBarOption;
