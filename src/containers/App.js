import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../styles/App.css';
// import WelcomeBlock from '../components/WelcomeBlock';
// import NavTopBar from '../components/NavTopBar';
// import Room from './Room';
// import TimeSearchRouter from '../routers/TimeSearchRouter';

import Protected from './Protected';
import Login from '../components/Login';

class App extends Component {
  render() {
    const currentPath = window.location.pathname
    return (
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />

        {currentPath.includes('login') ? 
          '' : <Protected />
        }
      </div>
    );
  }
}

export default App;