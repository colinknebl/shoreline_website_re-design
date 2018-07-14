import React, { Component } from 'react';
import './schedule.css';


export default class Schedule extends Component {
  render() {
    return (
      <section id="schedule" className="section">
        <div className="section-content">
          <h3 className="section-header">Schedule</h3>

          <p>Events are scheduled during for the evenings of Monday, Tuesday, Thursday, and Saturday mornings. A typical week will have two to three events scheduled. To view the 2017 - 2018 schedule, click the button below.</p>

          <a className="schedule-btn-link" href="./schedule.html"><button className="schedule-btn">View Schedule</button></a>
        </div>
      </section>
    );
  }
}
