import React from 'react';
import './DateCell.css';

const DateCell = (props) => {
  const weekDay = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
  const className = [
    'col-1',
    'date-cell',
    props.isInCurrentMonth ? '' : 'not-in-current-month'
  ]

  return (
    <div className={className.join(' ').trim()}>
      <div className="row">
        <div className="col">
          {weekDay[props.date.getDay()]}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {props.date.getDate()}
        </div>
      </div>
    </div>
  )
};

export default DateCell;
