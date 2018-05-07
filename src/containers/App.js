import React, { Component } from 'react';
import './App.css';
import EmptyMonthlyCalendar from './EmptyMonthlyCalendar';
import NavTopBar from '../components/NavTopBar';
import BasedOnRoomSidebar from './BasedOnRoomSidebar';
import WeekCalendar from '../components/WeekCalendar';

class App extends Component {
  render() {
    return (
      <div>
        <NavTopBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 sidebar">
              <BasedOnRoomSidebar />
            </div>
            <div className="col-10">
              <WeekCalendar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
