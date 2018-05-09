import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import '../styles/App.css';

import NavTopBar from '../components/NavTopBar';
import Home from '../components/Home';

import Room from './Room';
import Time from './Time';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <NavTopBar />
        <Route exact path="/" component={Home} />
        <Route path="/room" component={Room} />
        <Route path="/time" component={Time} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
