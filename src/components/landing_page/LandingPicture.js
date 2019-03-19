import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data.json';

export default class LandingPicture extends Component {
  handleClickLearnMore() {
    // document.querySelector("#learnMore").scrollIntoView();
    const y = document.querySelector("#learnMore").getBoundingClientRect().top + window.scrollY - 50;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div className="animated bounceIn">
        <img src={data.imgURL.pages.landingPage.landingWallpaper} className="img-fluid landing-wallpaper" alt="landing-wallpaper" />
        <div className="landing-picture-text text-center open-sans">
          <h2>"Finest footwear for finest peoples"</h2>
          <p className="mb-0 mt-3">Imagine the best in every shoe</p>
          <p>Performance is our game</p>
          <div className="d-inline">
            <Link to="/shoes">
              <button type="button" className="shop-now-btn btn btn-light my-2" style={{ width: "112.31px" }}>
                Shop now
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => this.handleClickLearnMore()}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
};

//TODO: Fix middle text 50% 50% div: relative, inside position absolute
