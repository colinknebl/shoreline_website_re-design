import React, { Component } from 'react';
import './more.css';


export default class More extends Component {
  render() {
    return (
      <section id="more" className="section">
        <div className="section-content-footer">
          <div className="footer-list-grp">
            <h3 className="section-header">Downloads</h3>
            <ul className="footer-list">
              <li><a href="./assets/downloads/registration_form.pdf" download>Registration Form</a></li>
              <li><a href="./assets/downloads/fee_and_payment_schedule.pdf" download>Fee and Payment Schedule</a></li>
              <li><a href="./assets/downloads/wmhsaa_eligibility_guidelines.pdf" download>WMHSAA Eligibility Guidelines</a></li>
            </ul>
          </div>
          <div className="footer-list-grp">
            <h3 className="section-header">Links</h3>
            <ul className="footer-list">
              <li><a href="./schedule.html">Schedule</a></li>
            </ul>
          </div>
          <div className="footer-list-grp">
            <h3 className="section-header">Connect</h3>
            <ul className="footer-list">
              <li><a href="https://www.facebook.com/groups/1471817999760177">Facebook</a></li>
              <li><a href="mailto:shorelinebreakerssports@gmail.com">shorelinebreakerssports@gmail.com</a></li>
              <li>616-402-3164</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}