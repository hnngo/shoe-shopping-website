import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterProducts } from '../../actions';
import {
  FILTER_ACCESSORIES,
  FILTER_SHOES,
  FILTER_SHOES_SELECTIONS,
  FILTER_ACCESSORIES_SELECTIONS
} from '../../constants'

class ProductsFilter extends Component {
  constructor(props) {
    super(props);

    // Prepare filter content
    let type;
    let typeArr = [];

    if (this.props.path.slice(1) === "shoes") {
      type = FILTER_SHOES;
      typeArr = Object.values(FILTER_SHOES_SELECTIONS);
    } else {
      type = FILTER_ACCESSORIES;
      typeArr = Object.values(FILTER_ACCESSORIES_SELECTIONS);
    }
    typeArr.unshift("all");

    this.state = {
      filterSelected: 0, // All
      filterType: type,
      filterTypeArr: typeArr
    };
  }

  handleClick(filterSelected) {
    if (filterSelected !== this.state.filterSelected) {
      this.setState({ filterSelected });

      this.props.filterProducts({
        type: this.state.filterType,
        selectedFilter: this.state.filterTypeArr[filterSelected]
      });
    }
  }

  renderFilterBubbles(dataArr) {
    return (
      dataArr.map((d, i) => {
        let selectedClass;
        if (this.state.filterSelected === i) {
          selectedClass = "products-filter-selected";
        }
        return (
          <li key={i} className="mx-1 d-inline-block">
            <button 
              className={"products-filter-bubbles " + selectedClass}
              onClick={() => this.handleClick(i)}
            >
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

export default connect(null, { filterProducts })(ProductsFilter);
//TODO: Add 2 lines for filter section
