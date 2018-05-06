import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './containers/App';
import Layout from './containers/Layout';
import WeeklyCalendar from './containers/WeekCalendar';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter, Link }  from 'react-router-dom';


const Home = (props) => { 
  console.log(props);
  return <h1>Home</h1>
}

ReactDOM.render(
  (
    <BrowserRouter> 
      <div>
        <Route component={Layout}/>
        <Route path='/home/:id' component={Home} />
        <Route path="/calender" component={App}/>
        <Route path="/weeklycalendar/:whichDay" component={WeeklyCalendar}/>
      </div>
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
