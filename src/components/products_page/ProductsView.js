import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductsStarReview from './ProductsStarReview';

export default class ProductsView extends Component {
  constructor(props) {
    super(props);

    this.state = { onLoadToggle: false };
  }

  // Handle cases when image fail to load at first reloading
  // Trigger an set state event will re-render after finishing
  handleOnloadImage() {
    this.setState({ onLoadToggle: !this.state.onLoadToggle });
  }

  handleMouseEnterImg(e) {
    const { classList } = e.target;
    classList.add("animated","pulse","fast", "infinite");
  }
  
  handleMouseLeaveImg(e) {
    const { classList } = e.target;
    classList.remove("animated","pulse","fast", "infinite");
  }
  
  render() {
    return (
      <div
        className={(this.props.optionDivClass || "col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2") + " text-center mb-5"}
      >
        <Link
          className={this.props.optionLinkClass || ""}
          to={this.props.itemLink}
        >
          <img
            src={this.props.item.imgURL}
            className={this.props.optionImgClass || "products-product-img"}
            alt={this.props.item.name.toLowerCase().replace(" ", "-")}
            onLoad={() => this.handleOnloadImage()}
            onMouseEnter={(e) => this.handleMouseEnterImg(e)}
            onMouseLeave={(e) => this.handleMouseLeaveImg(e)}
          /><br />
          <p className="products-products-title monteserrat mb-1 bold">
            {this.props.item.name.toUpperCase()}
          </p>
        </Link>
        <p className="m-0">{this.props.item.price}$S</p>
        <ProductsStarReview
          starNumber={this.props.item.star}
          keyStar={this.props.item.tag}
        />
      </div>
    );
  }
}
