import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/App.css';
import WelcomeBlock from '../components/WelcomeBlock';
import NavTopBar from '../components/NavTopBar';
import Room from './Room';
import TimeSearchRouter from '../routers/TimeSearchRouter';

class App extends Component {
  render() {
    return (
      <div>
        <NavTopBar />
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