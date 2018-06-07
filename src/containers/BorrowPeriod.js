import React, { Component } from 'react';
import { connect } from 'react-redux';

import StartBorrowDate from '../components/StartBorrowDate';
import EndBorrowDate from '../components/EndBorrowDate';
import { setStartDate, setEndDate } from '../actions/appointmentActions';

class BorrowPeriod extends Component {
  render() {
    if (this.props.isBorrowEveryWeek === true) {
      return (
        <div>
          <StartBorrowDate
            borrowStartDate={this.props.borrowStartDate}
            setStartDate={this.props.setStartDate} />
          <EndBorrowDate
            borrowEndDate={this.props.borrowEndDate}
            setEndDate={this.props.setEndDate} />
        </div>
      );
    }
    else
      return null;
  }
}

const mapStateToProps = (state) => {
  return {
    isBorrowEveryWeek: state.appointmentReducer.isBorrowEveryWeek,
    borrowStartDate: state.appointmentReducer.borrowStartDate,
    borrowEndDate: state.appointmentReducer.borrowEndDate
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStartDate: (date) => {
      dispatch(setStartDate(date));
    },
    setEndDate: (date) => {
      dispatch(setEndDate(date));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BorrowPeriod);
