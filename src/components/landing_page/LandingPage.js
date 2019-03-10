import React, { Component } from 'react';
import LandingPicture from './LandingPicture';
import LandingSample from './LandingSample';
import LandingSampleProducts from './LandingSampleProducts';
import LandingFeedback from './LandingFeedback';
import LandingContactForm from './LandingContactForm';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-picture-container">
        <LandingPicture />
        <LandingSample />
        <LandingSampleProducts />
        <LandingFeedback />
        <LandingContactForm />
      </div>
    );
  }
}
