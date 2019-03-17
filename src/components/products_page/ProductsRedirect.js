import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductsDetail from './ProductsDetail.js';

export default class ProductsRedirect extends Component {
  render() {
    // Add all the products in a array
    let productsArr = [];
    for (let product in this.props.productsObj) {
      for (let item in this.props.productsObj[product]) {
        productsArr.push(this.props.productsObj[product][item]);
      }
    }

    // Create each route for each products
    // If products size is big, this is not optimized
    return productsArr.map((i) => {
      return (
        <Route
          key={i.tag}
          path={this.props.pathName + "/" + i.tag}
          render={() => <ProductsDetail item={i} category={this.props.pathName.slice(1)}/>}
        />
      );
    })
  }
}
