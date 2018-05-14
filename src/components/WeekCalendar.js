import React from 'react';
import WeekGroup from './WeekGroup';
import CellGroup from './CellGroup';
import PeriodGroup from './PeriodGroup';
import '../styles/WeekCalendar.css'

const WeekCalendar = () => (
  <div className='weekcalendar'>
    <WeekGroup />
    <PeriodGroup />
    <CellGroup />
  </div>
)

export default WeekCalendar;