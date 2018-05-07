import React from 'react';
import WeekGroup from './WeekGroup';
import PeriodGroup from './PeriodGroup';

const borderColor = '#ddd'

class WeekCalendar extends React.Component {
  render() {
    const divstyle = {
      display: 'grid',
      gridTemplateColumns: '100px auto',
      border: `solid 1px ${borderColor}`,
    }

    return (
      <div style={divstyle}>
        <PeriodGroup />
        <WeekGroup />
      </div>
    )
  }
}

export default WeekCalendar;