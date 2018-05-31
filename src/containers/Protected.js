import React from 'react';
import { Switch } from 'react-router-dom';

import WelcomeBlock from '../components/WelcomeBlock';
import NavTopBar from '../components/NavTopBar';
import RoomSearchRouter from '../routers/RoomSearchRouter';
import TimeSearchRouter from '../routers/TimeSearchRouter';
import PrivateRoute from '../components/PrivateRoute';


const Protected = (props) => {
  return(
    <div>
      <NavTopBar />

      <Switch>
        <PrivateRoute path="/system" component={WelcomeBlock} />
        <PrivateRoute path="/room" component={RoomSearchRouter} />
        <PrivateRoute path="/time" component={TimeSearchRouter} />
      </Switch>
    </div>
  )
}

export default Protected;