import React, { Component } from 'react';
import ProductsFilter from './ProductsFilter';

export default class ProductsBody extends Component {
  renderTypes(...productTypes) {
    return productTypes.map((d) => {
      return Object.keys(d).map((k, i) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2" key={d + i}>
            <img src={d[k].imgURL} className="products-product-img" alt="landing-sample-shoes" /><br />
            <a href="/" className="products-products-title monteserrat mb-1 bold">{d[k].name.toUpperCase()}</a>
            <p>{d[k].price}$S</p>
          </div>
        );
      });
    });
  }

  render() {
    return (
      <div>
        <ProductsFilter
          headerSentence={this.props.headerSentence}
          filterContent={this.props.filterContent}
        />
        <div className="container mt-4">
          <div className="row text-center">
            {this.renderTypes(...this.props.productsTag)}
          </div>
        </div>
      </div>
    );
  }
}

