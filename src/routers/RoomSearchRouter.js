import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RoomLayout from '../components/RoomLayout';
import RoomSelect from '../containers/RoomSelect';

const RoomSearchRouter = ({ match }) => (
  <Switch>
    <Route exact path='/room' component={RoomSelect} />
    <Route path={`${match.url}/:building/:room`} component={RoomLayout} />
  </Switch>
);

export default RoomSearchRouter;
