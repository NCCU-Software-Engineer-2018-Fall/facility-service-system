import React from 'react';
import '../styles/Cell.css';

const borderColor = '#ddd'

class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'default'
    }
  }
  render() {
    return (
      <div className='cell'></div>
    )
  }
}

export default Cell;