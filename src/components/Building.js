import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, ListGroup, ListGroupItem, Col } from 'reactstrap';

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
        <ListGroupItem tag="a" action>
          <Link className="room-link" to={`/room/${room.building}/${room.classroom_name}`}>{room.classroom_name}</Link>
        </ListGroupItem>
      </ListGroup>)

    return (
      <Col md="4" className="building-collapse">
        <h1 className="building-name" onClick={this.toggle}>{this.props.name}</h1>
        <Collapse isOpen={this.state.collapse}>
          <ListGroup>
            {classroom}
          </ListGroup>
        </Collapse>
      </Col>
    )
  }
}

export default Building;