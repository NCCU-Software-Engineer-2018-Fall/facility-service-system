import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import TimeLayout from '../components/TimeLayout';

const TimeSearchRouter = ({match}) => (
  <Switch>
    <Route exact path={`${match.url}/:type/:year/:month/:date`} component={TimeLayout} />
    <Route component={TimeLayout} />
  </Switch>
);

export default TimeSearchRouter;
