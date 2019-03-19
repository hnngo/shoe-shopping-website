import React, { Component } from 'react';

export default class ProductsFilter extends Component {
  handleClick(e) {
    e.preventDefault();
  }

  renderFilterBubbles(dataArr) {
    return (
      dataArr.map((d, i) => {
        return (
          <li key={i} className="mx-1 d-inline-block">
            <button className="products-filter-bubbles" onClick={(e) => this.handleClick(e)}>
              {d.toUpperCase()}
            </button>
          </li>
        );
      })
    );
  }

  render() {
    return (
      <div className="mt-5">
        <p className="open-sans text-center pb-3 italic px-3 w-75 mx-auto">{this.props.headerSentence}</p>
        <div className="products-filter-container">
          <div className="container pt-3 pb-2">
            <div className="row">
              <ul className="products-filter-list d-inline text-center">
                {this.renderFilterBubbles(this.props.filterContent)}
              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

//TODO: Add 2 lines for filter section
//TODO: Add path direction for easily follow
