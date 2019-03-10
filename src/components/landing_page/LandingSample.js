import React, { Component } from 'react';
import data from '../../data.json';

export default class LandingSample extends Component {
  render() {
    return (
      <div>
        <div className="landing-slogan container w-50 text-center my-5 ">
          <p>-------</p>
          <h3>Worn by the world's most precious feet</h3>
          <p>We took the best principles from designing running shoes and applied them to classic and timesless dress shoes you can wear all day</p>
          <p>-------</p>
        </div>
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
      </div>
    );
  }
}

//TODO: Add hover sample effect
//TODO: Add button to direct them to shop
