import React from 'react';

class Week extends React.Component {
  render () {
    const weekstyle = {
      // position: 'sticky',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',

      border: 'solid 1px grey'
    }
    const weekdaystyle = {
      fontSize: 28,
      fontWeight: 'bold'
    }

    return (
      <div id="week" style={weekstyle}>
        <div id="weekdate">{this.props.month}月{this.props.day}日</div>
        <div id="weekday" style={weekdaystyle} >{this.props.weekday}</div>
      </div>
    )
  }
}

export default Week;