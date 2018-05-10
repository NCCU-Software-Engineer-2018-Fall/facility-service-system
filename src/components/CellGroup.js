import React from 'react';
// import WeekTemp from './WeekTemp';
import CellColumn from './CellColumn';

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

class CellGroup extends React.Component {
  render() {
    const divstyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridColumnStart: '2',
      gridRowStart: '2',

    }
    const weekgroup = weeks.map((week, i) => <CellColumn key={i} />)

    return (
      <div style={divstyle}>{weekgroup}</div>
    )
  }
}

export default CellGroup;