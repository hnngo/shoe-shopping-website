import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContactForm from './ContactForm';
import { navbar } from '../data.json';
import { filterProducts } from '../actions';
import {
  FILTER_SHOES,
  FILTER_ACCESSORIES,
  FILTER_SHOES_SELECTIONS,
  FILTER_ACCESSORIES_SELECTIONS,
  FILTER_BOOTS,
  FILTER_CHELSEA_BOOTS,
  FILTER_SNEAKER
} from '../constants';

class Footer extends Component {
  handleClickShortCut(type, filterContent) {
    this.props.filterProducts(filterContent);
    this.props.history.push(`/${type}`);

    const y = document.querySelector(".products-path").getBoundingClientRect().top + window.scrollY - 50;

    window.scroll({
      top: y,
      behavior: 'smooth'
    });
  }

  renderShorcut(category, type, arrShortcut, ...arrFilter) {
    return arrShortcut.map((item, i) => {
      return (
        <li
          key={item}
          className="footer-list"
          onClick={() => this.handleClickShortCut(
            category, {
              type: type,
              selectedFilter: arrFilter[i]
            })}
        >
          {item}
        </li>
      );
    })
  }

  render() {
    return (
      <div className="mt-4 pt-3">
        <div className="footer-container">
          <div className="container">
            <div className="row pt-5">
              <div className="col-3">
                <h6 className="text-white">Shoes</h6>
                <div className="row">
                  <div className="col-sm-6 text-white">
                    {this.renderShorcut("shoes", FILTER_SHOES, navbar.shoes.byBrand, ...Object.values(FILTER_SHOES_SELECTIONS))}
                  </div>
                  <div className="col-sm-6 text-white">
                    {this.renderShorcut("shoes", FILTER_SHOES, navbar.shoes.byStyle, FILTER_SNEAKER, FILTER_BOOTS, FILTER_CHELSEA_BOOTS)}
                  </div>
                </div>
              </div>
              <div className="col-2">
                <h6 className="text-white">Accessories</h6>
                <div className="row">
                  <div className="col-sm-6 text-white">
                    {this.renderShorcut("accessories", FILTER_ACCESSORIES, navbar.accessories.byType, ...Object.values(FILTER_ACCESSORIES_SELECTIONS))}
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-12">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="container d-flex justify-content-between">
            <p className="mb-0 py-5 text-white">@ Copyright Shoeniverse</p>
            <p className="mb-0 py-5 text-white">2019</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { filterProducts })(Footer));
