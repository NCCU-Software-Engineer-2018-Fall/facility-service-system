import React from 'react';
import { Switch } from 'react-router-dom';

import WelcomeBlock from '../components/WelcomeBlock';
import NavTopBarContainer from '../containers/NavTopBarContainer';
import RoomSearchRouter from '../routers/RoomSearchRouter';
import TimeSearchRouter from '../routers/TimeSearchRouter';
import UserBlockContainer from '../containers/UserBlockContainer';
import PrivateRoute from '../containers/PrivateRoute';

const Protected = (props) => {
  return(
    <div>
      <PrivateRoute path="/" component={NavTopBarContainer} />

      <Switch>
        <PrivateRoute path="/system" component={WelcomeBlock} />
        <PrivateRoute path="/room" component={RoomSearchRouter} />
        <PrivateRoute path="/time" component={TimeSearchRouter} />
        <PrivateRoute path="/user" component={UserBlockContainer} />
      </Switch>
    </div>
  )
}

export default Protected;