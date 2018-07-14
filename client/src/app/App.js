import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { AppProvider } from './state/index';

import './App.css';

import Main from '../components/main/main';
import SchedulePage from '../pages/schedule/schedule';

export default class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <Switch>
            <Route exact path="/" render={props => <Main {...props} />} />
            <Route exact path="/schedule" render={props => <SchedulePage {...props} />} />
          </Switch>
        </Router>
      </AppProvider>
    );
  }
}
