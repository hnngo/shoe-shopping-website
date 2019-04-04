import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductsHeader from './products_page/ProductsHeader';
import ProductsBody from './products_page/ProductsBody';
import ProductsRedirect from './products_page/ProductsRedirect';
import ProductsPath from './products_page/ProductsPath';
import data from '../data.json';

class ShoesPage extends Component {
  componentDidMount() {
    // Scroll to products when redirect to detail page
    try {
      const y = document.querySelector(".products-path").getBoundingClientRect().top + window.scrollY - 50;

      window.scroll({
        top: y,
        behavior: 'smooth'
      });
    } catch {
      window.scroll({
        top: 300,
        behavior: 'smooth'
      });
    }
  }

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
        <ProductsPath history={this.props.history} />
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
