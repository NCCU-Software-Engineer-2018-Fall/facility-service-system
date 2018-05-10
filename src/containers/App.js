import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import './App.css';
import EmptyMonthlyCalendar from './EmptyMonthlyCalendar';
import NavTopBar from '../components/NavTopBar';
import BasedOnRoomSidebar from './BasedOnRoomSidebar';
import WeekCalendar from '../components/WeekCalendar';
import WelcomeBlock from '../components/WelcomeBlock';
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

        <Container fluid>
          <Row>
            <Col md="2" className="sidebar">
              <BasedOnRoomSidebar />
            </Col>
            <Col md="10">
              <EmptyMonthlyCalendar />
            </Col>
          </Row>
        </Container>

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

export default connect(mapStateToProps, mapDispatchToProps)(App);