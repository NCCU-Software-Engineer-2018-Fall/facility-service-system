import React from 'react';
import {Row} from 'reactstrap';
import DateCellContainer from '../containers/DateCellContainer';
import '../styles/WeekRow.css';

const WeekRow = (props) => {
  let datesInWeek = [];
  for (let i = 0; i < props.dates.length; i++) {
    let isInCurrentMonth = true;
    if (props.dates[i].getMonth() !== props.firstDate.getMonth())
      isInCurrentMonth = false;

    datesInWeek.push(
      <DateCellContainer 
        isInCurrentMonth={isInCurrentMonth} 
        date={props.dates[i]} />
    );
  }

  return (
    <Row className="justify-content-center align-items-stretch seven-cols week-row">
      {datesInWeek}
    </Row>
  )
};

export default WeekRow;
