import React, { Component } from 'react';
import ShoesHeader from './ShoesHeader.js';
import ShoesFilter from './ShoesFilter.js';
import ShoesProduct from './ShoesProducts.js';

export default class ShoesPage extends Component {
  render() {
    return (
      <div>
        <ShoesHeader />
        <ShoesFilter />
        <ShoesProduct />
      </div>
    );
  }
}
