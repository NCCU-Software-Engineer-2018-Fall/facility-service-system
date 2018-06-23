import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import { getAppointmentByClassroom, getAllClassroom } from '../api';
import { recordClassroomAppointment } from '../actions/appointmentActions';

class BasedOnRoomSidebar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedClassroom: null
    }
  }
  
  componentWillMount() {
    let selectedClassroom
    Promise.resolve(getAllClassroom())
    .then(doc => {
      selectedClassroom = doc.data.find(room => room.classroom_name === this.props.selectedClassroom )
      this.setState({selectedClassroom})
      return selectedClassroom
    }).then(res => {
        Promise.resolve(getAppointmentByClassroom(res.id))
        .then(doc => {
          this.props.recordClassroomAppointment(doc.data)
        });
      })
  }
  
  render() {
    return (
      <div>
        <Sidebar type="room"
          selectDates={this.props.selectDates}
          classroom={this.props.classroom} 
          selectedBuilding={this.props.selectedBuilding} 
          selectBuilding={this.props.selectedBuilding}
          selectedClassroom={this.state.selectedClassroom} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectDates: state.appointmentReducer.selectDates,
    classroom: state.classroomReducer.classroom,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    recordClassroomAppointment: (appointment) => {
      dispatch(recordClassroomAppointment(appointment))
    }  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasedOnRoomSidebar);
