import React, { Component } from 'react';
import data from '../../data.json';

export default class ShoesFilter extends Component {
  handleClick(e) {
    e.preventDefault();
  }

  renderFilterBubbles(dataArr) {
    return (
      dataArr.map((d, i) => {
        return (
          <li key={i} className="mx-1 d-inline-block">
            <button className="shoes-filter-bubbles" onClick={(e) => this.handleClick(e)}>
              {d}
            </button>
          </li>
        );
      })
    );
  }

  render() {
    return (
      <div className="mt-5">
        <p className="open-sans text-center pb-3 italic px-3">Our feet carry the weight of our body throughout the day and that’s why you should choose quality shoes</p>
        <div className="filter-container">
          <div className="container pt-3 pb-2">
            <div className="row">
              <ul className="shoes-filter-list d-inline text-center">
                {this.renderFilterBubbles(["All", ...data.navbar.shoes.byBrand, ...data.navbar.shoes.byStyle])}
              </ul>
              {/* <div className="col-lg-6">
            <ul className="d-flex justify-content-center">
              {this.renderFilterBubbles(data.navbar.shoes.byStyle)}
            </ul>
          </div> */}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

//TODO: Add 2 lines for filter section
