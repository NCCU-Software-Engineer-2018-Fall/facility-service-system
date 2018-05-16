import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import '../styles/DateCell.css';

const DateCell = (props) => {
  const weekDay = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];

  return (
    <Link to={`/time/week/${props.date.getFullYear()}/${props.date.getMonth() + 1}/${props.date.getDate()}`}>
      <div>
        <div>
          {weekDay[props.date.getDay()]}
        </div>
        <div>
          {props.date.getDate()}
        </div>
      </div>
    </Link>
  )
};

export default withRouter(DateCell);
