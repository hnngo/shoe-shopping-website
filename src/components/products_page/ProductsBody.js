import React, { Component } from 'react';
import ProductsFilter from './ProductsFilter';
import { imgURL } from '../../data.json';
import ProductsView from './ProductsView';

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
            <h4>No "{this.props.searchItem}" item(s) found</h4>
            <p className="text-muted">Sorry but we can't find the item(s) you are looking for</p>
          </div>
        );
      }

      // Exist items
      return Object.keys(d).map((k, i) => {
        return (
          <ProductsView
            key={d + i}
            itemLink={this.renderProductsPath(d[k].tag)}
            itemSrcImg={d[k].imgURL}
            itemName={d[k].name}
            itemPrice={d[k].price}
          />
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
