import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductsHeader from './products_page/ProductsHeader';
import ProductsBody from './products_page/ProductsBody';
import ProductsRedirect from './products_page/ProductsRedirect';
import ProductsPath from './products_page/ProductsPath';
import data from "../data.json";

export default class AccessoriesPage extends Component {
  render() {
    const { gloves, bags, belts, sunglasses, purses } = data.imgURL.products.accessories;

    return (
      <div>
        <ProductsHeader
          panoImageURL={data.imgURL.pages.accessoriesPage.pano.imgURL}
          categoryName="Accessories"
        />
        <ProductsPath fullPathName={this.props.history.location.pathname} />
        <Switch>
          <Route
            exact path={this.props.match.path}
            render={() =>
              <ProductsBody
                urlPath={this.props.match.path}
                headerSentence={data.imgURL.pages.accessoriesPage.headerSentence}
                filterContent={["All", ...data.navbar.accessories.byType]}
                productsTag={[gloves, bags, belts, sunglasses, purses]}
              />
            }
          />
          <ProductsRedirect
            productsObj={data.imgURL.products.accessories}
            pathName={this.props.match.path}
          />
        </Switch>
      </div>
    );
  }
}
