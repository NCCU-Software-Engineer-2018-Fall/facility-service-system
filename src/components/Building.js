import React from 'react';
import { Collapse, ListGroup, ListGroupItem, Col } from 'reactstrap';
import RoomLink from './RoomLink';

import '../styles/Building.css';

class Building extends React.Component{
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const classrooms = this.props.classrooms
    const classroom = classrooms.map(room => 
      <ListGroup>
        <ListGroupItem action>
          <RoomLink 
          toPath={`/room/${room.building}/${room.classroom_name}/month`}
          classroomName={room.classroom_name}
          room={room} />
        </ListGroupItem>
      </ListGroup>)

    return (
      <Col md="4" className="building-collapse">
        <h1 className="building-name" onClick={this.toggle}>{this.props.name}</h1>
        <Collapse isOpen={this.state.collapse}>
          {classroom}
        </Collapse>
      </Col>
    )
  }
}

export default Building;