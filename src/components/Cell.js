import React from 'react';
import '../styles/Cell.css';

class Cell extends React.Component {
  render() {
    let { selectDateHandler, symbol, toggleClass } = this.props;
    let {day, month, year} = this.props.date;
    let className = ['cell', toggleClass];
    return (
      <div className={className.join(' ').trim()} onClick={() => { selectDateHandler(new Date(year, month - 1, day), symbol); console.log(symbol);}}></div>
    )
  }
}

export default Cell;