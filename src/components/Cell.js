import React from 'react';

const borderColor = '#ddd'

class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'default'
    }
  }

  render() {
    const statusBGC = {
      default: 'none',
      borrowed: '#c6dafc',
      disabled: '#e0e0e0'
    }

    const divstyle = {
      border: `solid ${borderColor}`,
      borderWidth: '1px 0px 0px 0px',

      background: statusBGC[this.state.status]
    }

    return (
      <div style={divstyle} onClick={this.click.bind(this)}>{this.state.status}</div>
    )
  }
  click(e) {
    if (this.state.status == 'default') {
      this.setState({
        status: 'borrowed'
      })
    } else {
      this.setState({
        status: 'default'
      })
    }
  }
}

export default Cell;