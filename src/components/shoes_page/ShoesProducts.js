import React, { Component } from 'react';
import { imgURL } from '../../data.json'

export default class ShoesProduct extends Component {
  renderProducts(arr) {
    return arr.map((d, i) => {
      return (
        <div className="col-lg-4 col-sm-4 col-xs-12 my-2" key={i}>
          <img src={d} className="landing-image-simple" alt="landing-sample-shoes" />
        </div>
      );
    })
  }

  renderTypes(...productTypes) {
    return productTypes.map((d) => {
      return Object.keys(d).map((k, i) => {
        return (
          <div className="col-lg-4 col-sm-4 col-xs-12 my-2" key={d+i}>
            <img src={d[k].imgURL} className="shoes-product-img" alt="landing-sample-shoes" />
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

