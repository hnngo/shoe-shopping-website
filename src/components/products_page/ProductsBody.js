import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductsFilter from './ProductsFilter';
import { imgURL } from '../../data.json';

export default class ProductsBody extends Component {
  constructor(props) {
    super(props);

    const dataCat = {
      shoes: [],
      accessories: [],
    }

    for (let key in imgURL.products) {
      for (let keyInside in imgURL.products[key]) {
        for (let keyInsideTag in imgURL.products[key][keyInside]) {
          const productsTag = imgURL.products[key][keyInside][keyInsideTag].tag;

          dataCat[key].push(productsTag);
        }
      }
    }

    this.state = { dataCat };
  }

  renderProductsPath = (tag) => {
    if (this.state.dataCat.shoes.includes(tag)) {
      return "/shoes/" + tag;
    } else if (this.state.dataCat.accessories.includes(tag)) {
      return "/accessories/" + tag;
    }
  }

  renderTypes(...productTypes) {
    return productTypes.map((d) => {
      // In case 0 items found
      if (d.length === 0) {
        return (
          <div key={d} className="w-75 mx-auto">
            <img src={imgURL.pages.searchPage.noItems.imgURL} className="img-fluid animated pulse fast infinite" alt="landing-sample-shoes" />
            <h4>No item(s) Found</h4>
            <p className="text-muted">Sorry but we can't find the item(s) you are looking for</p>
          </div>
        );
      }

      // Exist items
      return Object.keys(d).map((k, i) => {
        return (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2"
            key={d + i}
          >
            <Link to={this.renderProductsPath(d[k].tag)}>
              <img src={d[k].imgURL} className="products-product-img" alt="landing-sample-shoes" /><br />
              <p className="products-products-title monteserrat mb-1 bold">{d[k].name.toUpperCase()}</p>
            </Link>
            <p>{d[k].price}$S</p>
          </div>
        );
      });
    });
  }

  render() {
    return (
      <div className="mb-5 pb-5">
        <ProductsFilter
          headerSentence={this.props.headerSentence}
          filterContent={this.props.filterContent}
          path={this.props.urlPath}
        />
        <div className="container mt-4">
          <div className="row text-center">
            {this.renderTypes(...this.props.productsTag)}
          </div>
        </div>
      </div>
    );
  }
}
