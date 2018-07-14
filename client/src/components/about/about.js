import React, { Component } from 'react';
import './about.css';
import logo from '../../_assets/logo.png';


export default class About extends Component {
  render() {
    return (
      <section id="about" className="section">
        <div className="section-content">
          <h3 className="section-header">About</h3>

          <p>Shoreline Homeschool Athletic Association (SHAA) is a Christian-based group whose purpose is to provide safe, quality athletic programs for area homeschool children. We provide an opportunity to participate in competitive sports. The attributes we foster include teamwork, competitiveness, discipline, and respect. Currently we offer basketball for boys and girls, ages 8-18.</p>
          <br />
          <p>The season typically runs from November through February and culminates in a state-wide tournament. During the off-season, a week-long summer camp is hosted in the Muskegon area to give the kids an opportunity to work on their skills.</p>

          <img className="about-logo" src={logo} alt="Shoreline Breakers Logo" />

          <p>While it is our intention to produce confident, skilled and knowledgeable athletes with a love for the game of basketball, our greatest purpose and calling is to guide young minds toward teamwork, good sportsmanship, and ignite the flame to be part of that shining city on a hill.</p>
          <br />
          <p>"You are the light of the world. A town built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house. In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven." ~ Matthew 5:14-16</p>
        </div>

      </section>
    );
  }
}