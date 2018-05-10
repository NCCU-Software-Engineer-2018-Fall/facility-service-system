import React from 'react';
import WeekGroup from './WeekGroup';
import CellGroup from './CellGroup';
import PeriodGroup from './PeriodGroup';

const borderColor = '#ddd'

class WeekCalendar extends React.Component {
  render() {
    const divstyle = {
      display: 'grid',
      gridTemplateColumns: '100px auto',
      gridTemplateRows: '65px auto',
      border: `solid 1px ${borderColor}`,
    }

    return (
      <div style={divstyle}>
        <WeekGroup />
        <PeriodGroup />
        <CellGroup />
      </div>
    )
  }
}

export default WeekCalendar;