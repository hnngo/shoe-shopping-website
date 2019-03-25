import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterProducts } from '../actions';
import data from '../data.json';
import {
  FILTER_SHOES,
  FILTER_ACCESSORIES,
  FILTER_SHOES_SELECTIONS,
  FILTER_ACCESSORIES_SELECTIONS,
  FILTER_BOOTS,
  FILTER_CHELSEA_BOOTS,
  FILTER_SNEAKER
} from '../constants';

class PopupNavBar extends Component {
  handleClickNavItems(type, filterContent) {
    this.props.filterProducts(filterContent);
    this.props.history.push(`/${type}`);
  }

  renderPopupShoe() {
    return (
      <div className="container-fluid py-3 popup-nav">
        <div className="row">
          <div className="col1 col-lg-3">
            <h2 className="monteserrat text-right">SHOES</h2>
          </div>
          <div className="col-lg-2 col-md-3 border-left border-secondary">
            <h4>By Brands</h4>
            {this.renderList(data.navbar.shoes.byBrand, ...Object.values(FILTER_SHOES_SELECTIONS))}
          </div>
          <div className="col-lg-2 col-md-3 border-left border-secondary">
            <h4>By Style</h4>
            {this.renderList(data.navbar.shoes.byStyle, FILTER_SNEAKER, FILTER_BOOTS, FILTER_CHELSEA_BOOTS)}
          </div>
          <div className="col-lg-5 col-md-6 border-left border-secondary">
            <h1>Image</h1>
          </div>
        </div>
      </div>
    );
  }

  renderPopupAccessories() {
    return (
      <div className="container-fluid py-3 popup-nav">
        <div className="row">
          <div className="col1 col-lg-3">
            <h2 className="monteserrat text-right">ACCESSORIES</h2>
          </div>
          <div className="col-lg-2 col-md-3 border-left border-secondary">
            <h4>By Type</h4>
            {this.renderList(data.navbar.accessories.byType, ...Object.values(FILTER_ACCESSORIES_SELECTIONS))}
          </div>
          <div className="col-lg-7 col-md-6 border-left border-secondary">
            <h1>Image</h1>
          </div>
        </div>
      </div>
    );
  }

  renderList(list, ...category) {
    return list.map((d, i) => {
      let filterType = this.props.popupType === "shoes" ? FILTER_SHOES : FILTER_ACCESSORIES;

      return (
        <li
          key={i}
          className="popup-nav-link"
          onClick={() => this.handleClickNavItems(
            this.props.popupType, {
            type: filterType,
            selectedFilter: category[i]
          })}
        >
          {d}
        </li>
      );
    });
  }

  render() {
    return (
      <div
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseOut}
        className={`popup-nav-container animated fast ${this.props.animatedStyle} ${this.props.delayTime}`}
      >
        {this.props.popupType === "shoes" ? this.renderPopupShoe() : this.renderPopupAccessories()}
      </div>
    );
  }
}

export default withRouter(connect(null, { filterProducts })(PopupNavBar));

//TODO: Dim other part of website when active popup navbar
//TODO: Random pick up 1 or more products to show on popup nav bar
//TODO: Popup navbar showing when screen is small
//TODO: On other device, popup navbar insert new div instend of hovering effect
