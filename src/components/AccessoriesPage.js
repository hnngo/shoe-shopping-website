import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductsHeader from './products_page/ProductsHeader';
import ProductsBody from './products_page/ProductsBody';
import ProductsRedirect from './products_page/ProductsRedirect';
import ProductsPath from './products_page/ProductsPath';
import data from "../data.json";

class AccessoriesPage extends Component {
  componentDidMount() {
    // Scroll to products when redirect to detail page
    window.scrollTo(0, 200);
  }

  render() {
    // Prepare if products is filtered
    let filteredProducts;
    if (this.props.accessoriesFilter instanceof Array) {
      filteredProducts = this.props.accessoriesFilter.map((item) => data.imgURL.products.accessories[item]);
    } else {
      filteredProducts = [data.imgURL.products.accessories[this.props.accessoriesFilter]];
    }

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
                productsTag={filteredProducts}
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

const mapStateToProps = ({ FilterReducers }) => {
  return { accessoriesFilter: FilterReducers.accessoriesFilter };
};

export default connect(mapStateToProps)(AccessoriesPage);
