import React from 'react';
import Cell from './Cell';

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
const cellHeight = 65
const weekHeight = 60
const borderColor = '#ddd'

class Week extends React.Component {
  render() {
    const divstyle = {
      display: 'grid',
      gridTemplateRows: `${weekHeight}px repeat(15, ${cellHeight}px)`,
      border: `solid ${borderColor}`,
      borderWidth: '0px 0px 0px 1px'
    }
    const weekstyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
    const weekdaystyle = {
      fontSize: 28,
      fontWeight: 'bold'
    }

    const cells = periods.map((period, i) => <Cell key={i} />)
    return (
      <div style={divstyle} >
        <div id="week" style={weekstyle}>
          <div id="weekdate">{this.props.month}月{this.props.day}日</div>
          <div id="weekday" style={weekdaystyle} >{this.props.weekday}</div>
        </div>
        {cells}
      </div>
    )
  }
}

export default Week;