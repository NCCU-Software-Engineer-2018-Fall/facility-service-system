import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

class WeekControlWidget extends Component {
  render() {
    let nextWeek = new Date(this.props.weekFirstDate.getTime());
    nextWeek.setDate(this.props.weekFirstDate.getDate() + 7);
    let lastWeek = new Date(this.props.weekFirstDate.getTime());
    lastWeek.setDate(this.props.weekFirstDate.getDate() - 7);
    
    let content = ` ${this.props.weekFirstDate.getFullYear()} 年 ${this.props.weekFirstDate.getMonth() + 1} 月 `;
    let weekLastDate = new Date(this.props.weekFirstDate.getTime());
    weekLastDate.setDate(this.props.weekFirstDate.getDate() + 6);
    if(this.props.weekFirstDate.getMonth() !== weekLastDate.getMonth())
      content += ` - ${weekLastDate.getMonth() + 1} 月`

    return (
      <span className="navbar-text ml-auto time-info">
        <Link to={`/time/week/${lastWeek.getFullYear()}/${lastWeek.getMonth() + 1}/${lastWeek.getDate()}`}>
          <Button outline>
            <i className="fas fa-angle-left"></i>
          </Button>
        </Link>
        <span> {content} </span>
        <Link to={`/time/week/${nextWeek.getFullYear()}/${nextWeek.getMonth() + 1}/${nextWeek.getDate()}`}>
          <Button outline>
            <i className="fas fa-angle-right"></i>
          </Button>
        </Link>
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weekFirstDate: state.timeReducer.weekFirstDate
  };
};

export default withRouter(connect(mapStateToProps, null)(WeekControlWidget));

