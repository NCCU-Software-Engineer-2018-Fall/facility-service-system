import React from 'react';
import Week from './Week';

const weeks = [
  {
    month: '5',
    day: '1',
    weekday: '一'
  },
  {
    month: '5',
    day: '1',
    weekday: '二'
  },
  {
    month: '5',
    day: '1',
    weekday: '三'
  },
  {
    month: '5',
    day: '1',
    weekday: '四'
  },
  {
    month: '5',
    day: '1',
    weekday: '五'
  },
  {
    month: '5',
    day: '1',
    weekday: '六'
  },
  {
    month: '5',
    day: '1',
    weekday: '日'
  },
]

class WeekGroup extends React.Component {
  render() {
    const divstyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridColumnStart: 2
    }
    const weekgroup = weeks.map((week, i) => <Week key={i} month={week.month} day={week.day} weekday={week.weekday} />)

    return (
      <div style={divstyle}>{weekgroup}</div>
    )
  }
}

export default WeekGroup;