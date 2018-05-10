import React, { Component } from 'react';
import { connect } from 'react-redux';

import MonthlyCalendar from '../components/MonthlyCalendar';

class EmptyMonthlyCalendar extends Component {
  render() {
    return (
      <div>
        <MonthlyCalendar firstDate={this.props.firstDate} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstDate: state.timeReducer.firstDate
  };
};

export default connect(mapStateToProps, {})(EmptyMonthlyCalendar);
