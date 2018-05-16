import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeekGroup from '../components/WeekGroup';

class WeekGroupContainer extends Component {
  render() {
    return (
      <WeekGroup weekFirstDate={this.props.weekFirstDate} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weekFirstDate: state.timeReducer.weekFirstDate
  };
};

export default connect(mapStateToProps)(WeekGroupContainer);
