import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/App.css';
import Protected from './Protected';
import LoginContainer from '../containers/LoginContainer';

class App extends Component {
  render() {
    const currentPath = window.location.pathname
    
    return (
      <div>
        {currentPath.includes('login') ?
          '' : <Protected />
        }
        <Route exact path="/" component={LoginContainer} />
        <Route path="/login" component={LoginContainer} />
      </div>
    );
  }
}

export default App;