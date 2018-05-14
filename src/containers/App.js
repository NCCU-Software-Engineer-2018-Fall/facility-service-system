import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/App.css';
import WelcomeBlock from '../components/WelcomeBlock';
import NavTopBarRouter from '../routers/NavTopBarRouter';
import Room from './Room';
import TimeSearchRouter from '../routers/TimeSearchRouter';

class App extends Component {
  render() {
    return (
      <div>
        <NavTopBarRouter />
        <Switch>
          <Route path="/system" component={WelcomeBlock} />
          <Route path="/room" component={Room} />
          <Route path="/time" component={TimeSearchRouter} />
        </Switch>
      </div>
    );
  }
}

export default App;