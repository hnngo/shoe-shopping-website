import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductsStarReview from './ProductsStarReview';

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
            src={this.props.item.imgURL}
            className={this.props.optionImgClass || "products-product-img"}
            alt={this.props.item.name.toLowerCase().replace(" ", "-")}
          /><br />
          <p className="products-products-title monteserrat mb-1 bold">
            {this.props.item.name.toUpperCase()}
          </p>
        </Link>
        <p className="m-0">{this.props.item.price}$S</p>
        <ProductsStarReview
          starNumber={4}
          keyStar={this.props.item.tag}
        />
      </div>
    );
  }
}
