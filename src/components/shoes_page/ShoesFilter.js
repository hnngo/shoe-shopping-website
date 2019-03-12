import React, { Component } from 'react';
import data from '../../data.json';

export default class ShoesFilter extends Component {
  renderFilterBubbles(dataArr) {
    return (
      dataArr.map((d, i) => {
        return (
          <li key={i} className="mx-1 d-inline-block">
            <button type="button" className="btn shoes-filter-bubbles">
              {d}
            </button>
          </li>
        );
      })
    );
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
            <ul className="shoes-filter-list d-inline text-center">
              {this.renderFilterBubbles([ ...data.navbar.shoes.byBrand, ...data.navbar.shoes.byStyle])}
            </ul>
          {/* <div className="col-lg-6">
            <ul className="d-flex justify-content-center">
              {this.renderFilterBubbles(data.navbar.shoes.byStyle)}
            </ul>
          </div> */}
        </div>
      </div>
    );
  }
}
