import React, { Component } from 'react';
import { imgURL } from '../../data.json'

export default class ProductsBody extends Component {
  renderProducts(arr) {
    return arr.map((d, i) => {
      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2" key={i}>
          <img src={d} className="landing-image-simple" alt="landing-sample-shoes" />
        </div>
      );
    })
  }

  renderTypes(...productTypes) {
    return productTypes.map((d) => {
      return Object.keys(d).map((k, i) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2" key={d+i}>
            <img src={d[k].imgURL} className="shoes-product-img" alt="landing-sample-shoes" />
            <a href="/" className="shoes-products-title monteserrat mb-1 bold">{d[k].name.toUpperCase()}</a>
            <p>{d[k].price}$S</p>
          </div>
        );
      });
    });
  }

  render() {
    const { nikeShoes, adidasShoes, vansShoes, drmartens } = imgURL;

    return (
      <div className="container mt-4">
        <div className="row text-center">
          {this.renderTypes(nikeShoes, adidasShoes, vansShoes, drmartens)}
        </div>
      </div>
    );
  }
}

