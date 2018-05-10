import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';

import DateCell from '../components/DateCell';
import './DateCellContainer.css';

//FIXME: Try not to include any UI in container 
class DateCellContainer extends Component {
  render() {
    const extraClasses = [
      'date-cell',
      this.props.isSlideToRight ? 'animated fadeInLeft' : '',
      this.props.isSlideToLeft ? 'animated fadeInRight' : '',
      this.props.isInCurrentMonth ? '' : 'not-in-current-month'
    ];

    return (
      <Col md="1" className={extraClasses.join(' ').trim()}>
        <DateCell date={this.props.date} />
      </Col>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSlideToRight: state.styleReducer.slideToRight,
    isSlideToLeft: state.styleReducer.slideToLeft
  };
};

export default connect(mapStateToProps, {})(DateCellContainer);
