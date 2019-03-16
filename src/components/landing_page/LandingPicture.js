import React, { Component } from 'react';
import data from '../../data.json';

export default class LandingPicture extends Component {
  render() {
    return (
      <div className="animated bounceIn">
        <img src={data.imgURL.pages.landingPage.landingWallpaper} className="img-fluid landing-wallpaper" alt="landing-wallpaper" />
        <div className="landing-picture-text text-center open-sans">
          <h2>"Finest footwear for finest peoples"</h2>
          <p className="mb-0 mt-3">Imagine the best in every shoe</p>
          <p>Performance is our game</p>
          <div className="d-inline">
            <button type="button" className="shop-now-btn btn btn-light" style={{ width: "112.31px" }}>Shop now</button>
            <button type="button" className="btn btn-outline-light">Learn More</button>
          </div>
        </div>
      </div>
    );
  }
};

//TODO: Fix middle text 50% 50% div: relative, inside position absolute
