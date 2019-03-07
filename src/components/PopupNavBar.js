import React, { Component } from 'react';
import '../styles/PopupNavBar.css';
import data from '../data.json';

export default class PopupNavBar extends Component {
  renderPopupShoe() {
    return (
      <div className="container-fluid py-3 popup-nav">
        <div className="row">
          <div className="col1 col-lg-3">
            <h2 className="popup-title text-right">SHOES</h2> 
          </div>
          <div className="col2 col-lg-2 col-md-4 border-left border-secondary">
            <h4>By Brands</h4>
            {this.renderList(data.navbar.shoes.byBrand)}
          </div>
          <div className="col3 col-lg-2 col-md-4 border-left border-secondary">
            <h4>By Style</h4>
            {this.renderList(data.navbar.shoes.byStyle)}
          </div>
          <div className="col4 col-lg-5 col-md-4 border-left border-secondary">
            <h1>Image</h1>
          </div>
        </div>
      </div>
    );
  }

  renderPopupAccessories() {
    return (
      <div className="container-fluid popup-nav">
        <div className="row">
          <div className="col1 col-lg-3">
            <h2 className="popup-title text-right">ACCESSORIES</h2> 
          </div>
          <div className="col2 col-lg-3 col-md-4">
            <h1>2</h1>
          </div>
          <div className="col3 col-lg-3 col-md-4">
            <h1>3</h1>
          </div>
          <div className="col4 col-lg-3 col-md-4">
            <h1>4</h1>
          </div>
        </div>
      </div>
    );
  }

  renderPopupBrands() {
    return (
      <div className="container-fluid popup-nav">
        <div className="row">
          <div className="col1 col-lg-3">
            <h2 className="popup-title text-right">BRANDS</h2> 
          </div>
          <div className="col2 col-lg-3 col-md-4">
            <h1>2</h1>
          </div>
          <div className="col3 col-lg-3 col-md-4">
            <h1>3</h1>
          </div>
          <div className="col4 col-lg-3 col-md-4">
            <h1>4</h1>
          </div>
        </div>
      </div>
    );
  }

  renderList(list) {
    return list.map((d, i) => {
      return <li key={i}><a href="#">{d}</a></li>;
    });
  }

  renderPopup(type) {
    let res = undefined;
    if (type === "shoes") {
      res = this.renderPopupShoe();
    } else if (type === "accessories") {
      res = this.renderPopupAccessories();
    } else if (type === "brands") {
      res = this.renderPopupBrands();
    } else {
      res = <div />;
    }

    return res;
  }

  render() {
    return (
      <div
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseOut}
        className={`popup-nav-container animated fast ${this.props.animatedStyle} ${this.props.delayTime}`}
      >
        {this.renderPopup(this.props.popupType)}
      </div>
    );
  }
}

//TODO: CLean up code with resuable component
