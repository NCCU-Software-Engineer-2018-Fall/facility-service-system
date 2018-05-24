import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectDate } from '../actions/appointmentActions';
import Cell from '../components/Cell';

class CellContainer extends Component {
  render() {
    let { symbol, date, selectDates } = this.props;
    let className = '';
    for(let i = 0; i < selectDates.length; i++) {
      if(selectDates[i].date.getFullYear() === date.year &&
        selectDates[i].date.getMonth() === date.month - 1 &&
        selectDates[i].date.getDate() === date.day &&
        selectDates[i].time === symbol) {
          className = 'selected-day';
        }
    }

    return (
      <Cell toggleClass={className} selectDateHandler={this.props.selectDate} symbol={symbol} date={date} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectDates: state.appointmentReducer.selectDates
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectDate: (date, time) => {
      dispatch(selectDate(date, time));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CellContainer);
