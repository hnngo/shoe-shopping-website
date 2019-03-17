import React, { Component } from 'react';
import LandingPicture from './LandingPicture';
import LandingSample from './LandingSample';
import LandingSampleProducts from './LandingSampleProducts';
import LandingFeedback from './LandingFeedback';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="text-center">
        <LandingPicture />
        <LandingSample />
        <LandingSampleProducts />
        <LandingFeedback />
      </div>
    );
  }
}

//TODO: fix ipad screen
