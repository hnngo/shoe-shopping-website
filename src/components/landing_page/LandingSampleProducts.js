import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data.json';

const products = data.imgURL.products;

export default class LandingSampleProducts extends Component {
  renderProduct(type, ...arrProduct) {
    return arrProduct.map((item, i) => {
      return (
        <div className="col-md-4 col-sm-12" key={i}>
          <Link className="sample-link" to={`/${type}/${item.tag}`}>
            <img src={item.imgURL} className="sample-products img-fluid" alt={item.name.toLowerCase().replace(" ", "-")} />
            <p className="monteserrat bold mb-0 mt-1">{item.name.toUpperCase()}</p>
            <p className="open-sans">{item.price}$</p>
          </Link>
        </div>
      );
    })
  }

  render() {
    return (
      <div className="container my-5">
        <div>
          <h2 className="sample-header lobster mb-4">Sneakers</h2>
          <div className="row">
            {this.renderProduct(
              "shoes",
              products.shoes.nikeShoes.shoe4, products.shoes.nikeShoes.shoe2, products.shoes.nikeShoes.shoe5
            )}
          </div>
        </div>
        <div>
          <h2 className="sample-header lobster mb-4">Chelsea Boots</h2>
          <div className="row">
            {this.renderProduct(
              "shoes",
              products.shoes.drmartens.boot1, products.shoes.drmartens.boot2, products.shoes.drmartens.boot3
              
            )}
          </div>
        </div>
        <div>
          <h2 className="sample-header lobster mb-4">Accessories</h2>
          <div className="row">
            {this.renderProduct(
              "accessories",
              products.accessories.bags.bag2, products.accessories.sunglasses.sunglass3, products.accessories.belts.belt3
            )}
          </div>
        </div>
      </div>
    );
  }
}

//TODO: Star preview on each products
//TODO: Clean up code with reusable components
//TODO: Finding shoe with white background
