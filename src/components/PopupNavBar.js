import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

export default class PopupNavBar extends Component {
  renderPopupShoe() {
    return (
      <div className="container-fluid py-3 popup-nav">
        <div className="row">
          <div className="col1 col-lg-3">
            <h2 className="monteserrat text-right">SHOES</h2> 
          </div>
          <div className="col-lg-2 col-md-3 border-left border-secondary">
            <h4>By Brands</h4>
            {this.renderList(data.navbar.shoes.byBrand)}
          </div>
          <div className="col-lg-2 col-md-3 border-left border-secondary">
            <h4>By Style</h4>
            {this.renderList(data.navbar.shoes.byStyle)}
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
            {this.renderList(data.navbar.accessories.byType)}
          </div>
          <div className="col-lg-7 col-md-6 border-left border-secondary">
            <h1>Image</h1>
          </div>
        </div>
      </div>
    );
  }

  renderList(list) {
    return list.map((d, i) => {
      let path = "/" + d.toLowerCase();

      return <li key={i}><Link to={path}>{d}</Link></li>;
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

//TODO: Dim other part of website when active popup navbar
//TODO: Random pick up 1 or more products to show on popup nav bar
//TODO: Popup navbar showing when screen is small
