import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Collapse, ListGroup, ListGroupItem, Col } from 'reactstrap';
import { selectedClassroom } from '../actions/classroomAction';

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

  handleClick() {
    // this.props.selectedClassroom() 
  }

  render() {
    const classrooms = this.props.classrooms
    const classroom = classrooms.map(room => 
      <ListGroup>
        <ListGroupItem tag="a" action>
          <Link className="room-link" to={`/room/${room.building}/${room.classroom_name}/month`} 
          onClick={this.handleClick()} >{room.classroom_name}</Link>
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

// const mapStateToProps = (state) => {
//   return{
//     classroom: state.classroomReducer.classroom
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     selectedClassroom: () => {
//       dispatch(selectedClassroom());
//     }
//   }
// }

export default Building;