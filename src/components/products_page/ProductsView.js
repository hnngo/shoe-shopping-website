import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductsView extends Component {
  render() {
    return (
      <div
        className={this.props.optionDivClass || "col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2"}
      >
        <Link
          className={this.props.optionLinkClass || ""}
          to={this.props.itemLink}
        >
          <img 
            src={this.props.itemSrcImg}
            className={this.props.optionImgClass || "products-product-img"} 
            alt={this.props.itemAltImg || "landing-sample-shoes"}
          /><br/>
          <p className="products-products-title monteserrat mb-1 bold">
            {this.props.itemName.toUpperCase()}
          </p>
        </Link>
        <p>{this.props.itemPrice}$S</p>
      </div>
    );
  }
}
