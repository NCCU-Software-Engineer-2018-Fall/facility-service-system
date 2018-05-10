import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = (props) => {
  let sidebar = null;
  if (props.type === 'room')
    sidebar = (
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

  return (
    <div>
      {sidebar}
    </div>
  )
};

export default Sidebar;
