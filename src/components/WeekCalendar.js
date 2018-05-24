import React from 'react';
import WeekGroup from './WeekGroup';
import CellGroup from './CellGroup';
import PeriodGroup from './PeriodGroup';
import '../styles/WeekCalendar.css'

const WeekCalendar = (props) => (
  <div className='weekcalendar'>
    <WeekGroup weekFirstDate={props.weekFirstDate} />
    <PeriodGroup />
    <CellGroup weekFirstDate={props.weekFirstDate} />
  </div>
)

export default WeekCalendar;