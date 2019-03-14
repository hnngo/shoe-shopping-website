import React, { Component } from 'react';
import ProductsHeader from './products_page/ProductsHeader';
import ProductsFilter from './products_page/ProductsFilter';
import ProductsBody from './products_page/ProductsBody';

export default class AccessoriesPage extends Component {
  render() {
    return (
      <div>
        <ProductsHeader />
        <ProductsFilter />
        <ProductsBody />
      </div>
    );
  }
}
