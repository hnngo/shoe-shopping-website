import React, { Component } from 'react';
import data from '../../data.json';

export default class LandingPicture extends Component {
  render() {
    return (
      <div className="animated bounceIn slow">
        <img src={data.imgURL.landingPage.landingWallpaper} className="img-fluid landing-wallpaper" alt="landing-wallpaper" />
        <div className="landing-picture-text text-center">
          <h2>"Finest footwear for finest peoples"</h2>
          <p className="mb-0 mt-3 blockquote-foote">Imagine the best in every shoe</p>
          <p className="blockquote-foote">Performance is our game</p>
          <div className="d-inline">
            <button type="button" class="btn btn-light mr-2" style={{ width: "112.31px" }}>Shop now</button>
            <button type="button" class="btn btn-outline-light">Learn More</button>
          </div>
        </div>
      </div>
    );
  }
};
