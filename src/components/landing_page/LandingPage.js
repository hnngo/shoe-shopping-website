import React, { Component } from 'react';
import LandingPicture from './LandingPicture';
import LandingSample from './LandingSample';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-picture-container">
        <LandingPicture />
        <LandingSample />
      </div>
    );
  }
}
