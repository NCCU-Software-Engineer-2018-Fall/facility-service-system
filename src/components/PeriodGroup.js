import React from 'react';
import Period from './Period';

const periods = [
  ['A', '0600~0700'],
  ['B', '0600~0700'],
  ['1', '0600~0700'],
  ['2', '0600~0700'],
  ['3', '0600~0700'],
  ['4', '0600~0700'],
  ['C', '0600~0700'],
  ['D', '0600~0700'],
  ['5', '0600~0700'],
  ['6', '0600~0700'],
  ['7', '0600~0700'],
  ['8', '0600~0700'],
  ['E', '0600~0700'],
  ['F', '0600~0700'],
  ['G', '0600~0700']
]
const weekHeight = 60

class PeriodGroup extends React.Component {
  render() {
    const divstyle = {
      display: 'grid',
      gridTemplateRows: `${weekHeight}px repeat(15, 65px)`,
    }

    const periodgroup = periods.map((period, i) => <Period key={i} id={period[0]} time={period[1]} />)
    periodgroup.unshift(<div></div>)
    return (
      <div style={divstyle}>{periodgroup}</div>
    )
  }
}

export default PeriodGroup;