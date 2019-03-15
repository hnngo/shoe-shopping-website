import React, { Component } from 'react';
import ProductsHeader from './products_page/ProductsHeader';
import ProductsFilter from './products_page/ProductsFilter';
import ProductsBody from './products_page/ProductsBody';
import data from "../data.json";

export default class AccessoriesPage extends Component {
  render() {
    const { accessoriesPage, gloves, bags, belts, sunglasses, purses } = data.imgURL;

    return (
      <div>
        <ProductsHeader
          panoImageURL={accessoriesPage.pano.imgURL}
          categoryName="Accessories"
        />
        <ProductsFilter
          headerSentence={accessoriesPage.headerSentence}
          filterContent={["All", ...data.navbar.accessories.byType]}
        />
        <ProductsBody
          productsTag={[gloves, bags, belts, sunglasses, purses]}
        />
      </div>
    );
  }
}
