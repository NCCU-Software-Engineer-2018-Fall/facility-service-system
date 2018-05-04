import React from 'react';
import DateCell from './DateCell';
import './WeekRow.css';

const WeekRow = (props) => {
  let datesInWeek = [];
  for (let i = 0; i < props.dates.length; i++) {
    let isInCurrentMonth = true;
    if (props.dates[i].getMonth() !== new Date().getMonth())
      isInCurrentMonth = false;

    datesInWeek.push(
      <DateCell isInCurrentMonth={isInCurrentMonth} date={props.dates[i]} />
    );
  }

  return (
    <div className="row justify-content-center align-items-stretch week-row">
      {datesInWeek}
    </div>
  )
};

export default WeekRow;
