import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
  <div>
    <div className="sidebar-header">
      <h5>篩選條件</h5>
    </div>
    <ul className="list-unstyled">
      <li className="sidebar-item">Home</li>
      <li className="sidebar-item">About</li>
    </ul>
  </div>
);

export default Sidebar;
