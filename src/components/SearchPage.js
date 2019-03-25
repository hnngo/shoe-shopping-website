import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductsHeader from './products_page/ProductsHeader';
import { imgURL } from '../data.json';
import ProductsPath from './products_page/ProductsPath';
import ProductsBody from './products_page/ProductsBody';
import ProductsRedirect from './products_page/ProductsRedirect';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    // Set up item by tag name
    const dataTag = {};

    for (let key in imgURL.products) {
      for (let keyInside in imgURL.products[key]) {
        for (let keyInsideTag in imgURL.products[key][keyInside]) {
          const productsTag = imgURL.products[key][keyInside][keyInsideTag].tag;
          dataTag[productsTag] = imgURL.products[key][keyInside][keyInsideTag];
        }
      }
    }

    this.state = {
      data: dataTag
    };
  }
  
  getMatchProducts(searchKeys, data=this.state.data) {
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

    console.log(matchProducts);
    console.log([imgURL.products.shoes.nikeShoes, imgURL.products.shoes.vansShoes]);
    if (this.props.location.pathname.startsWith("/search") && this.props.location.search.startsWith("?=")) {
      return (
        <div>
          <ProductsHeader
            panoImageURL={imgURL.pages.searchPage.pano.imgURL}
            categoryName="Search Results"
          />
          <ProductsPath history={this.props.history} />
          {/* <Switch>
            <Route
              exact path={this.props.match.path}
              render={() => */}
          <ProductsBody
            urlPath={"/search"}
            headerSentence={`Search reults for "${this.props.location.search.slice(2)}"`}
            filterContent={""}
            productsTag={[matchProducts]}
          />
          {/* }
            /> */}
          {/* <ProductsRedirect
              productsObj={imgURL.products.shoes}
              pathName={this.props.match.path}
            /> */}
          {/* </Switch> */}
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

//TODO: Render no items to be found
