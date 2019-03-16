import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductsHeader from './products_page/ProductsHeader';
import ProductsFilter from './products_page/ProductsFilter';
import ProductsBody from './products_page/ProductsBody';
import data from '../data.json';
import ProductsDetail from './products_page/ProductsDetail';

export default class ShoesPage extends Component {
  render() {
    const { shoesPage, nikeShoes, adidasShoes, vansShoes, drmartens } = data.imgURL;

    return (
      <BrowserRouter>
        <div>
          <ProductsHeader
            panoImageURL={shoesPage.pano.imgURL}
            categoryName="Shoes"
          />
          {/* <Switch>
            <Route exact path="/" Component={
              <div>
                <ProductsFilter
                  headerSentence={shoesPage.headerSentence}
                  filterContent={["All", ...data.navbar.shoes.byBrand, ...data.navbar.shoes.byStyle]}
                />
                <ProductsBody
                  productsTag={[nikeShoes, adidasShoes, vansShoes, drmartens]}
                />
              </div>
            } />
            <Route exact path="/detail" Component={ProductsDetail} />
          </Switch> */}
          <ProductsBody
            headerSentence={shoesPage.headerSentence}
            filterContent={["All", ...data.navbar.shoes.byBrand, ...data.navbar.shoes.byStyle]}
            productsTag={[nikeShoes, adidasShoes, vansShoes, drmartens]}
          />
        </div>

      </BrowserRouter>
    );
  }
}
