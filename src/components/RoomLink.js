import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectedClassroom } from '../actions/classroomAction';

class Roomlink extends React.Component{
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.selectedClassroom(this.props.room)
  }

  render () {
    return (
      <Link className="room-link" to={this.props.toPath}
        onClick={this.handleClick} >{this.props.classroomName}</Link>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    classroom: state.classroomReducer.classroom
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectedClassroom: (room) => {
      console.log(room);
      dispatch(selectedClassroom(room));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Roomlink)