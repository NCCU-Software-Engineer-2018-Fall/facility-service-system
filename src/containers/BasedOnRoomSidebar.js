import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';

class BasedOnRoomSidebar extends Component {
  render() {
    return (
      <div>
        <Sidebar type="room"/>
      </div>
    );
  }
}

export default BasedOnRoomSidebar;
