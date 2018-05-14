import React from 'react';
import {Switch, Route} from 'react-router-dom';

import EmptyNavTopBar from '../components/EmptyNavTopBar';
import NavTopBarContainer from '../containers/NavTopBarContainer';

const NavTopBarRouter = () => (
  <Switch>
    <Route exact path="/system" component={EmptyNavTopBar}/>
    <Route component={NavTopBarContainer} />
  </Switch>
);

export default NavTopBarRouter;
