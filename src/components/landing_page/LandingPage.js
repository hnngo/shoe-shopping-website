import React, { Component } from 'react';
import LandingPicture from './LandingPicture';
import LandingSample from './LandingSample';
import LandingSampleProducts from './LandingSampleProducts';
import LandingFeedback from './LandingFeedback';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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

//TODO: fix ipad screen not showing image
