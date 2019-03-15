import React, { Component } from 'react';
import ProductsHeader from './products_page/ProductsHeader';
import ProductsFilter from './products_page/ProductsFilter';
import ProductsBody from './products_page/ProductsBody';
import data from '../data.json';

export default class ShoesPage extends Component {
  render() {
    const { shoesPage, nikeShoes, adidasShoes, vansShoes, drmartens } = data.imgURL;

    return (
      <div>
        <ProductsHeader
          panoImageURL={shoesPage.pano.imgURL}
          categoryName="Shoes"
        />
        <ProductsFilter
          headerSentence={shoesPage.headerSentence}
          filterContent={["All", ...data.navbar.shoes.byBrand, ...data.navbar.shoes.byStyle]}
        />
        <ProductsBody
          productsTag={[nikeShoes, adidasShoes, vansShoes, drmartens]}
        />
      </div>
    );
  }
}
