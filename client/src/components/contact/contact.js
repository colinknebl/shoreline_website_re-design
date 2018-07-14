import React, { Component } from 'react';
import './contact.css';


export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section">
        <div className="section-content">
          <h3 className="section-header">Contact</h3>

          <form action="https://formspree.io/shorelinebreakerssports@gmail.com" method="POST" title="Shoreline Contact Form">
            <div className="input-grp">
              <label htmlFor="first-name">First Name<sup>*</sup></label>
              <input type="text" name="first-name" required />
            </div>
            
            <div className="input-grp">
              <label htmlFor="last-name">Last Name<sup>*</sup></label>
              <input type="text" name="last-name" required />
            </div>
            
            <div className="input-grp">
              <label htmlFor="email">Email<sup>*</sup></label>
              <input type="email" name="email" required />
            </div>
            
            <div className="input-grp">
              <label htmlFor="phone-number">Phone</label>
              <input type="tel" name="phone-number" />
            </div>
            
            <div className="input-grp">
              <label htmlFor="message">Message<sup>*</sup></label>
              <textarea name="message" placeholder="Type your comments here" required></textarea>
            </div>
            
            <div className="form-btn">
              <div className="spacer"></div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
