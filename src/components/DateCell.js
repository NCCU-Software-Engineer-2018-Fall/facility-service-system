import React from 'react';
import '../styles/DateCell.css';

const DateCell = (props) => {
  const weekDay = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];

  return (
    <div className={"col-1 date-cell " + (props.isInCurrentMonth ? '' : 'not-in-current-month')}>
      <div>
        {weekDay[props.date.getDay()]}
      </div>
      <div>
        {props.date.getDate()}
      </div>
    </div>
  )
};

export default DateCell;
