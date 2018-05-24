import React from 'react';
import CellColumn from './CellColumn';
import '../styles/CellGroup.css'

const weekDay = ['日', '一', '二', '三', '四', '五', '六'];

const CellGroup = (props) => {
  let weeks = [];
  let weekFirstDate = props.weekFirstDate;

  for (let i = 0; i < 7; i++) {
    let thisDate = new Date(
      weekFirstDate.getFullYear(),
      weekFirstDate.getMonth(),
      weekFirstDate.getDate() + i);

    let aDay = {
      year: thisDate.getFullYear(),
      month: thisDate.getMonth() + 1,
      day: thisDate.getDate(),
      weekday: weekDay[thisDate.getDay()]
    }
    weeks.push(aDay);
  }

  const weekgroup = weeks.map((week, i) => <CellColumn key={i} date={week} />)

  return (
    <div className='cell-group'>{weekgroup}</div>
  )
}

export default CellGroup;