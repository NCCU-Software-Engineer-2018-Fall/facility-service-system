import React from 'react';
import WeekRow from './WeekRow';
import '../styles/MonthlyCalendar.css';

const MonthlyCalendar = () => {
  let weeksInMonth = [];

  let currentTime = new Date();
  let currentYear = currentTime.getFullYear();
  //從0開始算，0代表一月
  let currentMonth = currentTime.getMonth();

  //當月第一天
  let firstDate = new Date(currentYear, currentMonth, 1);

  for (let i = 0; i < 6; i++) {
    let aWeek = [];
    for (let j = 0; j < 7; j++) {
      let thisDate = new Date(currentYear, currentMonth, (i * 7 + j) - firstDate.getDay() + 1);
      aWeek.push(thisDate);
    }
    weeksInMonth.push(
      <WeekRow dates={aWeek} />
    );
  }

  return (
    <div className="row">
      <div className="col monthly-calendar" onClick={handleClick()}>
        {weeksInMonth}
      </div>
    </div>
  )
};

function handleClick(e) {
  console.log(e);
}

export default MonthlyCalendar;
