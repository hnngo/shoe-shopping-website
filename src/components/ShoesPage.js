import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductsHeader from './products_page/ProductsHeader';
import ProductsBody from './products_page/ProductsBody';
import data from '../data.json';
import ProductsDetail from './products_page/ProductsDetail';

export default class ShoesPage extends Component {
  render() {
    const { shoesPage, nikeShoes, adidasShoes, vansShoes, drmartens } = data.imgURL;
    
    return (
        <div>
          <ProductsHeader
            panoImageURL={shoesPage.pano.imgURL}
            categoryName="Shoes"
          />
          <Switch>
            <Route
              exact path={this.props.match.path}
              render={() =>
                <ProductsBody
                  urlPath={this.props.match.path}
                  headerSentence={shoesPage.headerSentence}
                  filterContent={["All", ...data.navbar.shoes.byBrand, ...data.navbar.shoes.byStyle]}
                  productsTag={[nikeShoes, adidasShoes, vansShoes, drmartens]}
                />
              }
            />
            <Route
              exact path={this.props.match.path + "/detail"}
              render={() => <ProductsDetail />}
            />
          </Switch>
        </div>
    );
  }
}
