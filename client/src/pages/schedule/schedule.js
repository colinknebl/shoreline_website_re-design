import React, { Component } from 'react';
import './schedule.css';

import Nav from '../../components/nav/nav';
import Home from '../../components/home/home';
import More from '../../components/more/more';

export default class SchedulePage extends Component {
  render() {
    return (
      <main className="App">
        <Nav />
        <section id="content-wrapper" className="content-wrapper">
          <Home />
          
          <div className="section-content">
        
            <h1>Shoreline Breakers 2017 - 2018 Schedule</h1>
    
            <iframe className="mobile-calendar" src="https://events.time.ly/vm93xxc?view=stream"></iframe>
            <iframe className="desktop-calendar" src="https://events.time.ly/vm93xxc?view=month"></iframe>
            
            <p><span className="note">note:</span> Click or tap an event for more details.</p>

          </div>

          <section id="spacer"></section>
          <More />
        </section>
      </main>
    );
  }
}