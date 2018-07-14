import React, { Component } from 'react';
import './home.css';
import logoReDesign from '../../_assets/logo_re-design.png';
import { Link, Redirect } from 'react-router-dom'

export default class Home extends Component {

  constructor() {
    super();
    
    this.type = 'push-right';
    this.body = document.querySelector('body');
  }

  onNavClick() {
    this.wrapper = document.querySelector('#content-wrapper');
    this.mask = document.querySelector('#nav-mask');
    this.menu = document.querySelector(`#nav-menu-${this.type}`);
    this.closeBtn = this.menu.querySelector('.nav-menu-close-btn');
    this.menuOpeners = document.querySelectorAll('.nav-btn');
    this.menuItems = document.querySelectorAll('.mobile-menu-link');

    this.closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));

    // Event for clicks on the mask.
    this.mask.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));

    // Event for clicks on the nav options.
    this.menu.addEventListener('click', function(e) {
      if (e.target.classList[0] === 'mobile-menu-link') {
        this.close();
      }
    }.bind(this));
    this.open();
  }

  open() {
    this.body.classList.add('has-active-menu');
    // this._disableBodyScroll();

    this.wrapper.classList.add('has-' + this.type);
    this.menu.classList.add('is-active');
    this.mask.classList.add('is-active');
  }

  close() {
    this.body.classList.remove('has-active-menu');
    // this._enableBodyScroll();

    this.wrapper.classList.remove('has-' + this.type);
    this.menu.classList.remove('is-active');
    this.mask.classList.remove('is-active');
  }

  scrollTo(sectionName, event) {
    event.preventDefault()

    if (window.location.pathname !== '/') {
      window.location.pathname = '/';
    }
    else {
      let sectionTop = document.querySelector(sectionName).offsetTop;
      window.scroll({
        top: sectionTop,
        behavior: 'smooth'
      })
    }

    
  }

  render() {
    return (
      <section id="home" className="section">
        <header className="content-wrapper-header">
          <a className="header-logo-link" href="#home">
            <img className="header-logo" src={logoReDesign} alt="logo" width="160" height="36" />
          </a>
          <span id="nav-btn-push-right" className="nav-btn" onClick={this.onNavClick.bind(this)}>
            <svg width="25" height="24">
              <line x1="1" y1="3" x2="24" y2="3" />
              <line x1="1" y1="12" x2="24" y2="12" />
              <line x1="1" y1="21" x2="24" y2="21" />
            </svg>
          </span>
          <nav className="desktop-menu">
            <ul className="nav-menu-list">
              <li className="nav-menu-item">
                <a href="#home" className="nav-menu-link">home</a>
              </li>

              <li className="nav-menu-item" onClick={this.scrollTo.bind(this, '#about')}>
                <a href="" className="nav-menu-link">About</a>
              </li>

              <li className="nav-menu-item">
                <Link to={`/schedule`} className="nav-menu-link">
                  Schedule
                </Link>
              </li>

              <li className="nav-menu-item" onClick={this.scrollTo.bind(this, '#contact')}>
                <a href="" className="nav-menu-link">contact</a>
              </li>
              
              <li className="nav-menu-item" onClick={this.scrollTo.bind(this, '#more')}>
                <a href="" className="nav-menu-link">more</a>
              </li>
            </ul>
          </nav>
        </header>
        
        <div className="header-welcome-msg">
          <h1>Welcome to the Home of the<br />Shoreline Breakers</h1>
          <h2>Muskegon Area's Homeschool Athletic Association</h2>
        </div>
        <div className="header-contact-cta">
          <p><a href="#contact">Contact</a> us for more information about our programs!</p>
        </div>

      </section>
    );
  }
}