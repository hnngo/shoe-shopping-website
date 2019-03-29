import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import data from '../../data.json';
import { filterProducts } from '../../actions';
import {
  FILTER_BOOTS,
  FILTER_SNEAKER,
  FILTER_SHOES
} from '../../constants';

class LandingSample extends Component {
  handleRedirectToProducts(type) {
    switch (type) {
      case FILTER_BOOTS:
        this.props.filterProducts({
          type: FILTER_SHOES,
          selectedFilter: FILTER_BOOTS
        });
        this.props.history.push('/shoes');
        return;
      case FILTER_SNEAKER:
        this.props.filterProducts({
          type: FILTER_SHOES,
          selectedFilter: FILTER_SNEAKER
        });
        this.props.history.push('/shoes');
        return;
      default:
        return;
    }
  }

  render() {
    const { pages } = data.imgURL;
    return (
      <div>
        <div className="landing-slogan container w-75 text-center my-5">
          <p>-------</p>
          <h3 className="lobster">Worn by the world's most precious feet</h3>
          <p className="open-sans">We took the best principles from designing running shoes and applied them to classic and timesless dress shoes you can wear all day</p>
          <p>-------</p>
        </div>
        <div className="row mt-2" id="learnMore">
          <div
            className="sample-col col-lg-4 col-md-4 col-sm-12 animated slideInLeft slow"
            onClick={() => this.handleRedirectToProducts(FILTER_SNEAKER)}
          >
            <img src={pages.landingPage.landingSampleShoes} className="landing-image-simple" alt="landing-sample-shoes" />
            <p className="landing-picture-text landing-sample-text open-sans">SNEAKERS</p>
          </div>
          <div
            className="sample-col col-lg-4 col-md-4 col-sm-12 animated  slideInUp slow"
            onClick={() => this.handleRedirectToProducts(FILTER_BOOTS)}
          >
            <img src={pages.landingPage.landingSampleBoots} className="landing-image-simple" alt="landing-sample-boots" />
            <p className="landing-picture-text landing-sample-text open-sans">BOOTS</p>
          </div>
          <div className="sample-col col-lg-4 col-md-4 col-sm-12 animated slideInRight slow">
            <Link to="/accessories">
              <img src={pages.landingPage.landingSampleAccessories} className="landing-image-simple" alt="landing-sample-accessories" />
              <p className="landing-picture-text landing-sample-text open-sans">ACCESSORIES</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { filterProducts })(LandingSample);
