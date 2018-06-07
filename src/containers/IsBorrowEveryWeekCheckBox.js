import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectEveryWeekBox } from '../actions/appointmentActions';

class IsBorrowEveryWeekCheckBox extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" 
          checked={this.props.isBorrowEveryWeek}
          onChange={() => { this.props.selectEveryWeekBox() }} />
        &nbsp;每星期都借
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isBorrowEveryWeek: state.appointmentReducer.isBorrowEveryWeek
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectEveryWeekBox: () => {
      dispatch(selectEveryWeekBox())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IsBorrowEveryWeekCheckBox);
