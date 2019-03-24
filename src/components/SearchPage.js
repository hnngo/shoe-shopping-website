import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductsHeader from './products_page/ProductsHeader';
import { imgURL } from '../data.json';
import ProductsPath from './products_page/ProductsPath';
import ProductsBody from './products_page/ProductsBody';
import ProductsRedirect from './products_page/ProductsRedirect';

class SearchPage extends Component {
  render() {
    console.log(this.props)
    if (this.props.location.pathname.startsWith("/search") && this.props.location.search.startsWith("?=")) {
      return (
        <div>
          <ProductsHeader
            panoImageURL={imgURL.pages.searchPage.pano.imgURL}
            categoryName="Search Results"
          />
          <ProductsPath history={this.props.history} />
          <Switch>
            <Route
              exact path={this.props.match.path}
              render={() =>
                <ProductsBody
                  urlPath={this.props.match.path}
                  headerSentence={""}
                  filterContent={["test", "test"]}
                  productsTag={[imgURL.products.shoes.nikeShoes]}
                />
              }
            />
            <ProductsRedirect
              productsObj={imgURL.products.shoes}
              pathName={this.props.match.path}
            />
          </Switch>
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

//TODO: correct the path for search
