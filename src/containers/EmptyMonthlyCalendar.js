import React, { Component } from 'react';
import MonthlyCalendar from '../components/MonthlyCalendar';
import { Link } from 'react-router-dom';


class EmptyMonthlyCalendar extends Component {
  render() {
    return (
      <div>
        <MonthlyCalendar />
      </div>
    );
  }
}

export default EmptyMonthlyCalendar;
