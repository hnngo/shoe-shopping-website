import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductsHeader from './products_page/ProductsHeader';
import { imgURL } from '../data.json';
import ProductsPath from './products_page/ProductsPath';
import ProductsBody from './products_page/ProductsBody';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    // Set up item by tag name
    const dataTag = {};
    const dataCat = {
      shoes: [],
      accessories: [],
    }

    for (let key in imgURL.products) {
      for (let keyInside in imgURL.products[key]) {
        for (let keyInsideTag in imgURL.products[key][keyInside]) {
          const productsTag = imgURL.products[key][keyInside][keyInsideTag].tag;
          dataTag[productsTag] = imgURL.products[key][keyInside][keyInsideTag];

          dataCat[key].push(productsTag);
        }
      }
    }

    this.state = {
      data: dataTag,
      dataCat
    };
  }

  componentDidUpdate() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }


  getMatchProducts(searchKeys, data = this.state.data) {
    let matchSearch = Object.keys(data).filter((item) => {
      if (item.includes(searchKeys) || data[item].name.toLowerCase().includes(searchKeys)) {
        return true;
      }
      return false;
    });

    return matchSearch.map((item) => data[item]);
  }

  render() {
    let matchProducts = this.getMatchProducts(this.props.location.search.slice(2).toLowerCase(), this.state.data);

    if (this.props.location.pathname.startsWith("/search") && this.props.location.search.startsWith("?=")) {
      return (
        <div>
          <ProductsHeader
            panoImageURL={imgURL.pages.searchPage.pano.imgURL}
            categoryName="Search Results"
          />
          <ProductsPath history={this.props.history} />
          <ProductsBody
            urlPath={"/search"}
            searchItem={this.props.location.search.slice(2)}
            headerSentence={`${matchProducts.length} search results for "${this.props.location.search.slice(2)}"`}
            filterContent={""}
            productsTag={[matchProducts]}
          />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = ({ FilterReducers }) => {
  return {
    searchKeys: FilterReducers.searchKeys
  }
};

export default connect(mapStateToProps)(SearchPage);
