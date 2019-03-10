import React, { Component } from 'react';
import data from '../../data.json';

export default class LandingSample extends Component {
  render() {
    return (
      <div className="row mt-2">
        <div className="sample-col col-lg-4 col-md-4 col-sm-12 animated slideInLeft">
          <img src={data.imgURL.landingPage.landingSampleShoes} className="landing-image-simple" alt="landing-sample-shoes" />
          <p className="landing-picture-text landing-sample-text">SNEAKERS</p>
        </div>
        <div className="sample-col col-lg-4 col-md-4 col-sm-12 animated slideInUp">
          <img src={data.imgURL.landingPage.landingSampleAccessories} className="landing-image-simple" alt="landing-sample-accessories" />
          <p className="landing-picture-text landing-sample-text">ACCESSORIES</p>
        </div>
        <div className="sample-col col-lg-4 col-md-4 col-sm-12 animated slideInRight">
          <img src={data.imgURL.landingPage.landingSampleBoots} className="landing-image-simple" alt="landing-sample-shoes" />
          <p className="landing-picture-text landing-sample-text">BOOTS</p>
        </div>
      </div>
    );
  }
}
