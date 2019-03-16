import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductsHeader from './products_page/ProductsHeader';
import ProductsBody from './products_page/ProductsBody';
import data from "../data.json";
import ProductsDetail from './products_page/ProductsDetail';

export default class AccessoriesPage extends Component {
  render() {
    const { accessoriesPage, gloves, bags, belts, sunglasses, purses } = data.imgURL;
    console.log(this.props.match)
    return (
      <div>
        <ProductsHeader
          panoImageURL={accessoriesPage.pano.imgURL}
          categoryName="Accessories"
        />
        <Switch>
          <Route
            exact path={this.props.match.path}
            render={() =>
              <ProductsBody
                urlPath={this.props.match.path}
                headerSentence={accessoriesPage.headerSentence}
                filterContent={["All", ...data.navbar.accessories.byType]}
                productsTag={[gloves, bags, belts, sunglasses, purses]}
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
