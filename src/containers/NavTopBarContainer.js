import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavTopBar from '../components/NavTopBar';
import { slideToRight, slideToLeft, reset } from '../actions/styleActions';

class NavTopBarContainer extends Component {
  render() {
    return (
      <NavTopBar
        firstDate={this.props.firstDate}
        forward={this.props.shiftForwardFirstDate}
        back={this.props.shiftBackFirstDate}
        slideToRight={this.props.slideToRight}
        slideToLeft={this.props.slideToLeft}
        reset={this.props.reset} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstDate: state.timeReducer.firstDate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    slideToRight: () => {
      dispatch(slideToRight());
    },
    slideToLeft: () => {
      dispatch(slideToLeft());
    },
    reset: () => {
      dispatch(reset());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavTopBarContainer);

