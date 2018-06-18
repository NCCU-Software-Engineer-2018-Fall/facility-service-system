import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllClassroom } from '../api';
import { recordAllClassroom } from '../actions/classroomAction';
import { Container, Row } from 'reactstrap';

import Building from '../components/Building';

import '../styles/RoomSelect.css'

class RoomSelect extends Component {  
  componentWillMount() {
    Promise.resolve(getAllClassroom())
      .then(doc => {
        this.props.recordAllClassroom(doc.data)
      })
  }
  
  render () {
    const allClassroom = this.props.classroom
    
    const uni = a => [...new Set(a)]
    let buildinglist = uni(allClassroom.map(i => i.building))
    let roomlist = buildinglist.map(i => allClassroom.filter(room => room.building === i))
    
    const buildingGroup = buildinglist.map((building, i) => 
    <Building key={i} name={building} classrooms={roomlist[i]} />)

    return (
      <Container fluid>
        <Row>
          {buildingGroup}
        </Row>
      </Container>
    )
  }
}

const mapsStateToProps = (state) => {
  return {
    classroom: state.classroomReducer.classroom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    recordAllClassroom: (classroom) => {
      dispatch(recordAllClassroom(classroom))
    }
  }
}

export default connect(mapsStateToProps, mapDispatchToProps)(RoomSelect);