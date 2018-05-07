import React, { Component } from 'react';
import './App.css';
import EmptyMonthlyCalendar from './EmptyMonthlyCalendar';
import WeekCalendar from './WeekCalendar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <EmptyMonthlyCalendar />
        <WeekCalendar />
      </div>
    );
  }
}

export default App;
