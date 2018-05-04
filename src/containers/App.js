import React, { Component } from 'react';
import './App.css';
import EmptyMonthlyCalendar from './EmptyMonthlyCalendar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <EmptyMonthlyCalendar />
      </div>
    );
  }
}

export default App;
