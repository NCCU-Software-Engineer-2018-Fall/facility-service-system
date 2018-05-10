import React from 'react';
import {Row, Col} from 'reactstrap';

import WeekRow from './WeekRow';
import '../styles/MonthlyCalendar.css';

const MonthlyCalendar = (props) => {
  let weeksInMonth = [];

  let firstDate = props.firstDate;
  let currentYear = firstDate.getFullYear();
  //從0開始算，0代表一月
  let currentMonth = firstDate.getMonth();

  for (let i = 0; i < 6; i++) {
    let aWeek = [];
    for (let j = 0; j < 7; j++) {
      let thisDate = new Date(currentYear, currentMonth, (i * 7 + j) - firstDate.getDay() + 1);
      aWeek.push(thisDate);
    }
    weeksInMonth.push(
      <WeekRow 
        dates={aWeek} 
        firstDate={props.firstDate} />
    );
  }

  return (
    <Row>
      <Col className="monthly-calendar">
        {weeksInMonth }
      </Col>
    </Row>
  )
};

export default MonthlyCalendar;
