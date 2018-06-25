import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../styles/NavTopBar.css';

class WeekControlWidget extends Component {
  render() {
    let nextWeek = new Date(this.props.weekFirstDate.getTime());
    nextWeek.setDate(this.props.weekFirstDate.getDate() + 7);
    let lastWeek = new Date(this.props.weekFirstDate.getTime());
    lastWeek.setDate(this.props.weekFirstDate.getDate() - 7);
    
    let contentText = ` ${this.props.weekFirstDate.getFullYear()} 年 ${this.props.weekFirstDate.getMonth() + 1} 月 `;
    let weekLastDate = new Date(this.props.weekFirstDate.getTime());
    weekLastDate.setDate(this.props.weekFirstDate.getDate() + 6);
    if(this.props.weekFirstDate.getMonth() !== weekLastDate.getMonth())
      contentText += ` - ${weekLastDate.getMonth() + 1} 月`

    const urlsplit = this.props.match.url.split('/')
    let backUrl, forwardUrl, toCurrentMonthUrl
    console.log(urlsplit);
    if (urlsplit.includes('time')) {
      backUrl = `/time/week/${lastWeek.getFullYear()}/${lastWeek.getMonth() + 1}/${lastWeek.getDate()}`
      forwardUrl = `/time/week/${nextWeek.getFullYear()}/${nextWeek.getMonth() + 1}/${nextWeek.getDate()}`
      toCurrentMonthUrl = `/time/month/${this.props.weekFirstDate.getFullYear()}/${this.props.weekFirstDate.getMonth() + 1}/1`
    }
    else if (urlsplit.includes('room')) {
      backUrl = `/room/${urlsplit[2]}/${urlsplit[3]}/week/${lastWeek.getFullYear()}/${lastWeek.getMonth() + 1}/${lastWeek.getDate()}`
      forwardUrl = `/room/${urlsplit[2]}/${urlsplit[3]}/week/${nextWeek.getFullYear()}/${nextWeek.getMonth() + 1}/${nextWeek.getDate()}`
      toCurrentMonthUrl = `/room/${urlsplit[2]}/${urlsplit[3]}/month/${this.props.weekFirstDate.getFullYear()}/${this.props.weekFirstDate.getMonth() + 1}/1`
    }

    let content = (
      <Link to={toCurrentMonthUrl} className="to-current-month">
        {contentText}
      </Link>
    );
    
    return (
      <span className="navbar-text ml-auto time-info">
        <Link to={backUrl}>
          <Button outline>
            <i className="fas fa-angle-left"></i>
          </Button>
        </Link>
        <span> {content} </span>
        <Link to={forwardUrl}>
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

