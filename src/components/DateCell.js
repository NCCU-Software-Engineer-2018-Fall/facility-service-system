import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import '../styles/DateCell.css';

const DateCell = (props) => {
  const weekDay = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
  const urlsplit = props.match.url.split('/')
  let url
  if (urlsplit.includes('time')) {
    url = `/time/week/${props.date.getFullYear()}/${props.date.getMonth() + 1}/${props.date.getDate()}`
  } 
  else if (urlsplit.includes('room')){
    url = `/room/${urlsplit[2]}/${urlsplit[3]}/week/${props.date.getFullYear()}/${props.date.getMonth() + 1}/${props.date.getDate()}`
  }
  return (
    <Link to={url}>
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
