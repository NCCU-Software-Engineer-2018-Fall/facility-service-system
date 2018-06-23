import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

import { slideToRight, slideToLeft, reset } from '../actions/styleActions';

class MonthControlWidget extends Component {
  render() {
    let year = this.props.firstDate.getFullYear();
    let month = this.props.firstDate.getMonth();
    let backYear = year;
    let backMonth = month - 1;
    let forwardYear = year;
    let forwardMonth = month + 1;
    if (forwardMonth === 12) {
      forwardYear++;
      forwardMonth = 0;
    }
    if (backMonth === -1) {
      backYear--;
      backMonth = 11;
    }

    const urlsplit = this.props.match.url.split('/')
    let backUrl, forwardUrl
    if (urlsplit.includes('time')) {
      backUrl = `/time/month/${backYear}/${backMonth + 1}/1`
      forwardUrl = `/time/month/${forwardYear}/${forwardMonth + 1}/1`
    }
    else if (urlsplit.includes('room')) {
      backUrl = `/room/${urlsplit[2]}/${urlsplit[3]}/month/${backYear}/${backMonth + 1}/1`
      forwardUrl = `/room/${urlsplit[2]}/${urlsplit[3]}/month/${forwardYear}/${forwardMonth + 1}/1`
    }
    
    return (
      <span className="navbar-text ml-auto time-info">
        <Link to={backUrl}>
          <Button outline
            onClick={() => {
              this.props.slideToRight();
              setTimeout(() => {
                this.props.reset();
              }, 200);
            }}>
            <i className="fas fa-angle-left"></i>
          </Button>
        </Link>
        <span>{` ${this.props.firstDate.getFullYear()} 年 ${this.props.firstDate.getMonth() + 1} 月 `}</span>
        <Link to={forwardUrl}>
          <Button outline
            onClick={() => {
              this.props.slideToLeft();
              setTimeout(() => {
                this.props.reset();
              }, 200);
            }}>
            <i className="fas fa-angle-right"></i>
          </Button>
        </Link>
      </span>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MonthControlWidget));
