import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RoomLayout from '../components/RoomLayout';
import RoomSelect from '../containers/RoomSelect';

const RoomSearchRouter = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}/:building/:room/:type`} component={RoomLayout} />
    <Route path={`${match.url}/:building/:room/:type/:year/:month/:date`} component={RoomLayout} />
    <Route path='/room' component={RoomSelect} />
  </Switch>
);

export default RoomSearchRouter;
