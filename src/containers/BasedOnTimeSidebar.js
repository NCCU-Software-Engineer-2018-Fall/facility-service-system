import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import { getAllClassroom } from '../api';
import { recordAllClassroom } from '../actions/classroomAction';

class BasedOnTimeSidebar extends Component {
  componentWillMount() {
    Promise.resolve(getAllClassroom())
      .then(doc => {
        this.props.recordAllClassroom(doc.data)
      });
  }

  render() {
    return (
      <div>
        <Sidebar type="time"
          selectDates={this.props.selectDates}
          classroom={this.props.classroom} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectDates: state.appointmentReducer.selectDates,
    classroom: state.classroomReducer.classroom
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    recordAllClassroom: (classroom) => {
      dispatch(recordAllClassroom(classroom))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasedOnTimeSidebar);
