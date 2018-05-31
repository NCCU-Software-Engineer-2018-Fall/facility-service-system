import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/App.css';

import Protected from './Protected';
import Login from '../components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Protected />
        </Switch>
      </div>
    );
  }
}

export default App;