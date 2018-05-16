import React from 'react';
import WeekGroupContainer from '../containers/WeekGroupContainer';
import CellGroup from './CellGroup';
import PeriodGroup from './PeriodGroup';
import '../styles/WeekCalendar.css'

const WeekCalendar = () => (
  <div className='weekcalendar'>
    <WeekGroupContainer />
    <PeriodGroup />
    <CellGroup />
  </div>
)

export default WeekCalendar;