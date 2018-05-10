import React from 'react';

const borderColor = '#ddd'

class Period extends React.Component {
  render() {
    const divstyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px 0px',

      border: `solid ${borderColor}`,
      borderWidth: '1px 0px 0px 0px',
      boxSizing: 'border-box'
    }

    return (
      <div style={divstyle} id='period'>
        <div id="periodId">{this.props.id}</div>
        <div id="periodTime">{this.props.time}</div>
      </div>
    )
  }
}

export default Period;