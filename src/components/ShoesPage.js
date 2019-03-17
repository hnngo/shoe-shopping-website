import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductsHeader from './products_page/ProductsHeader';
import ProductsBody from './products_page/ProductsBody';
import ProductsRedirect from './products_page/ProductsRedirect';
import data from '../data.json';

export default class ShoesPage extends Component {
  render() {
    const { nikeShoes, adidasShoes, vansShoes, drmartens } = data.imgURL.products.shoes;

    return (
      <div>
        <ProductsHeader
          panoImageURL={data.imgURL.pages.shoesPage.pano.imgURL}
          categoryName="Shoes"
        />
        <Switch>
          <Route
            exact path={this.props.match.path}
            render={() =>
              <ProductsBody
                urlPath={this.props.match.path}
                headerSentence={data.imgURL.pages.shoesPage.headerSentence}
                filterContent={["All", ...data.navbar.shoes.byBrand, ...data.navbar.shoes.byStyle]}
                productsTag={[nikeShoes, adidasShoes, vansShoes, drmartens]}
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
