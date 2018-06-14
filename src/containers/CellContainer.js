import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectDate } from '../actions/appointmentActions';
import Cell from '../components/Cell';

class CellContainer extends Component {
  render() {
    let { symbol, date, selectDates, appointments } = this.props;
    let className = '';
    for(let i = 0; i < selectDates.length; i++) {
      if(selectDates[i].date.getFullYear() === date.year &&
        selectDates[i].date.getMonth() === date.month - 1 &&
        selectDates[i].date.getDate() === date.day &&
        selectDates[i].time === symbol) {
          className = 'selected-day';
        }
    }
    if (this.props.isLoadAppointment) {
      for(let i = 0; i < appointments.length; i++) {
        let str = `${date.year}-${date.month<10?'0':''}${date.month}-${date.day<10?'0':''}${date.day}`
        if (appointments[i].reserved_date == str && appointments[i].symbol === symbol) {
            className = 'disabled';
          }
      }
    }
    return (
      <Cell toggleClass={className} selectDateHandler={this.props.selectDate} symbol={symbol} date={date} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectDates: state.appointmentReducer.selectDates,
    appointments: state.appointmentReducer.appointments,
    isLoadAppointment: state.appointmentReducer.isLoadAppointment
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
