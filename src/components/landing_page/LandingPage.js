import React, { Component } from 'react';
import LandingPicture from './LandingPicture';
import LandingSample from './LandingSample';
import LandingSampleProducts from './LandingSampleProducts';
import LandingFeedback from './LandingFeedback';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-picture-container">
        <LandingPicture />
        <LandingSample />
        <LandingSampleProducts />
        <LandingFeedback />
      </div>
    );
  }
}
