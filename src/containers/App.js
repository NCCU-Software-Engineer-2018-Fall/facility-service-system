import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/App.css';
import Protected from './Protected';
import LoginContainer from '../containers/LoginContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/login" component={LoginContainer} />
          <Protected />
        </Switch>
      </div>
    );
  }
}

export default App;