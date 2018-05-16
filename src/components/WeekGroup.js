import React from 'react';
import Week from './Week';
import '../styles/WeekGroup.css'

const WeekGroup = (props) => {
  let weeks = [];
  const weekDay = ['日', '一', '二', '三', '四', '五', '六'];
  let weekFirstDate = props.weekFirstDate;

  for (let i = 0; i < 7; i++) {
    let thisDate = new Date(
      weekFirstDate.getFullYear(),
      weekFirstDate.getMonth(),
      weekFirstDate.getDate() + i);

    let aDay = {
      month: thisDate.getMonth() + 1,
      day: thisDate.getDate(),
      weekday: weekDay[thisDate.getDay()]
    }
    weeks.push(aDay);
  }

  const weekgroup = weeks.map((week, i) =>
    <Week key={i} month={week.month} day={week.day} weekday={week.weekday} />
  );

  return (
    <div className='week-group'>
      {weekgroup}
    </div>
  )
};

export default WeekGroup;