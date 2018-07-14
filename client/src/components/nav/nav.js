import React, { Component } from 'react';
import './nav.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class Nav extends Component {
  render() {
    return (
      <header className="mobile-menu">
        <nav id="nav-menu-push-right" className="nav-menu nav-menu-push-right">
          <span className="nav-menu-close-btn">
            <svg width="25" height="25">
              <line x1="1" y1="24" x2="24" y2="1" />
              <line x1="1" y1="1" x2="24" y2="24" />
            </svg>
          </span>
          <ul className="nav-menu-list">
            <li className="nav-menu-item"><a href="#home" className="mobile-menu-link">home</a></li>
            <li className="nav-menu-item">
              {/* <a href="#about" className="mobile-menu-link">about</a> */}
              <Link to={`#about`} className="mobile-menu-link">
                About
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to={`schedule`} className="mobile-menu-link">
                Schedule
              </Link>
            </li>
            <li className="nav-menu-item"><a href="#contact" className="mobile-menu-link">contact</a></li>
            <li className="nav-menu-item"><a href="#more" className="mobile-menu-link">more</a></li>
          </ul>
        </nav>
        <div id="nav-mask" className="nav-mask"></div>
      </header>
    );
  }

}