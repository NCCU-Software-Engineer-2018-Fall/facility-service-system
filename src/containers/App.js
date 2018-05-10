import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

import '../styles/App.css';
import NavTopBar from '../components/NavTopBar';
import WelcomeBlock from '../components/WelcomeBlock';
import Room from './Room';
import Time from './Time';
import { shiftForwardFirstDate, shiftBackFirstDate } from '../actions/timeActions';
import { slideToRight, slideToLeft, reset } from '../actions/styleActions';

class App extends Component {
  render() {
    return (
      <div>
        <NavTopBar
          firstDate={this.props.firstDate}
          forward={this.props.shiftForwardFirstDate}
          back={this.props.shiftBackFirstDate}
          slideToRight={this.props.slideToRight}
          slideToLeft={this.props.slideToLeft}
          reset={this.props.reset} />
        <Route path="/system" component={WelcomeBlock} />
        <Route path="/room" component={Room} />
        <Route path="/time" component={Time} />
      </div>
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
    shiftForwardFirstDate: (date) => {
      dispatch(shiftForwardFirstDate(date));
    },
    shiftBackFirstDate: (date) => {
      dispatch(shiftBackFirstDate(date));
    },
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));