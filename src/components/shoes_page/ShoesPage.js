import React, { Component } from 'react';
import ShoesHeader from './ShoesHeader.js';
import ShoesFilter from './ShoesFilter.js';

export default class ShoesPage extends Component {
  render() {
    return (
      <div>
        <ShoesHeader />
        <ShoesFilter />
      </div>
    );
  }
}
