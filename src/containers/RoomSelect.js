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
      });
  }

  render () {
    const allClassroom = this.props.classroom

    const uni = a => [...new Set(a)]
    let buildinglist = uni(fakeAllClassroom.map(i => i.building))
    let roomlist = buildinglist.map(i => fakeAllClassroom.filter(room => room.building === i))
    
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

const fakeAllClassroom = [
  {
    "id": "a33110b8-6766-448b-9107-d4ce8ca710d4",
    "classroom_id": 4,
    "classroom_name": "大仁樓200101",
    "building": '大仁樓',
    "floor": null,
    "state": "1",
    "creation_time": "2018-05-20T15:13:12.019Z"
  },
  {
    "id": "a33110b8-6766-448b-9107-d4ce8ca710d4",
    "classroom_id": 4,
    "classroom_name": "大仁樓200102",
    "building": '大仁樓',
    "floor": null,
    "state": "1",
    "creation_time": "2018-05-20T15:13:12.019Z"
  },
  {
    "id": "a33110b8-6766-448b-9107-d4ce8ca710d4",
    "classroom_id": 4,
    "classroom_name": "大仁樓200103",
    "building": '大仁樓',
    "floor": null,
    "state": "1",
    "creation_time": "2018-05-20T15:13:12.019Z"
  },
  {
    "id": "a33110b8-6766-448b-9107-d4ce8ca710d4",
    "classroom_id": 4,
    "classroom_name": "大勇樓200101",
    "building": '大勇樓',
    "floor": null,
    "state": "1",
    "creation_time": "2018-05-20T15:13:12.019Z"
  },
  {
    "id": "a33110b8-6766-448b-9107-d4ce8ca710d4",
    "classroom_id": 4,
    "classroom_name": "大勇樓200102",
    "building": '大勇樓',
    "floor": null,
    "state": "1",
    "creation_time": "2018-05-20T15:13:12.019Z"
  },
  {
    "id": "a33110b8-6766-448b-9107-d4ce8ca710d4",
    "classroom_id": 4,
    "classroom_name": "大勇樓200103",
    "building": '大勇樓',
    "floor": null,
    "state": "1",
    "creation_time": "2018-05-20T15:13:12.019Z"
  },
  {
    "id": "a33110b8-6766-448b-9107-d4ce8ca710d4",
    "classroom_id": 4,
    "classroom_name": "大智樓200101",
    "building": '大智樓',
    "floor": null,
    "state": "1",
    "creation_time": "2018-05-20T15:13:12.019Z"
  },
  {
    "id": "a33110b8-6766-448b-9107-d4ce8ca710d4",
    "classroom_id": 4,
    "classroom_name": "大智樓200102",
    "building": '大智樓',
    "floor": null,
    "state": "1",
    "creation_time": "2018-05-20T15:13:12.019Z"
  },
  {
    "id": "a33110b8-6766-448b-9107-d4ce8ca710d4",
    "classroom_id": 4,
    "classroom_name": "大智樓200103",
    "building": '大智樓',
    "floor": null,
    "state": "1",
    "creation_time": "2018-05-20T15:13:12.019Z"
  },

  
]