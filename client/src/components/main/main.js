import React, { Component } from 'react';

import Nav from '../nav/nav';
import Home from '../home/home';
import About from '../about/about';
import Schedule from '../schedule/schedule';
import Contact from '../contact/contact';
import More from '../more/more';

export default class Main extends Component {
  render() {
    return (
      <main className="App">
        <Nav />
        <section id="content-wrapper" className="content-wrapper">
          <Home />
          <About />
          <Schedule />
          <Contact />
          <section id="spacer"></section>
          <More />
        </section>
      </main>
    );
  }
}
