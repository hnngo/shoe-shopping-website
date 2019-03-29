import React, { Component } from 'react';
import LandingPicture from './LandingPicture';
import LandingSample from './LandingSample';
import LandingSampleProducts from './LandingSampleProducts';
import LandingFeedback from './LandingFeedback';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div className="text-center">
        <LandingPicture />
        <LandingSample history={this.props.history} />
        <LandingSampleProducts />
        <LandingFeedback />
      </div>
    );
  }
}
