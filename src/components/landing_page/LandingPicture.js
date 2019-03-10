import React, { Component } from 'react';
import data from '../../data.json';

export default class LandingPicture extends Component {
  render() {
    return (
      <div className="landing-picture-container animated bounceInLeft">
        <img src={data.imgURL.landingWallpaper} className="img-fluid" alt="landing-wallpaper"></img>
        <div className="landing-picture-text text-center">
          <h2>"Finest footwear for finest peoples"</h2>
          <p className="mb-0 mt-3 blockquote-foote">Imagine the best in every shoe</p>
          <p className="blockquote-foote">Performance is our game</p>
          <div className="d-inline">
            <button type="button" class="btn btn-secondary mr-2">Shop now</button>
            <button type="button" class="btn btn-outline-light">Learn More</button>
          </div>
        </div>
      </div>
    );
  }
};
