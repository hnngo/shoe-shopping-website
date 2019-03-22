import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductsHeader from './products_page/ProductsHeader';
import ProductsBody from './products_page/ProductsBody';
import ProductsRedirect from './products_page/ProductsRedirect';
import ProductsPath from './products_page/ProductsPath';
import data from '../data.json';

class ShoesPage extends Component {
  render() {
    // Prepare if products is filtered
    let filteredProducts;
    if (this.props.shoesFilter instanceof Array) {
      filteredProducts = this.props.shoesFilter.map((item) => data.imgURL.products.shoes[item]);
    } else {
      filteredProducts = [data.imgURL.products.shoes[this.props.shoesFilter]];
    } 

    return (
      <div>
        <ProductsHeader
          panoImageURL={data.imgURL.pages.shoesPage.pano.imgURL}
          categoryName="Shoes"
        />
        <ProductsPath fullPathName={this.props.history.location.pathname} />
        <Switch>
          <Route
            exact path={this.props.match.path}
            render={() =>
              <ProductsBody
                urlPath={this.props.match.path}
                headerSentence={data.imgURL.pages.shoesPage.headerSentence}
                filterContent={["All", ...data.navbar.shoes.byBrand, ...data.navbar.shoes.byStyle]}
                productsTag={filteredProducts}
              />
            }
          />
          <ProductsRedirect
            productsObj={data.imgURL.products.shoes}
            pathName={this.props.match.path}
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({ FilterReducers }) => {
  return { shoesFilter: FilterReducers.shoesFilter };
};

export default connect(mapStateToProps)(ShoesPage);

//TODO: Filter boots sneaker chelsea boots
//TODO: Go to products detail scroll to top
//TODO: When entering error link example /shoes/orderadsa => redirect to shoes not fail loading
