import React, { Component } from 'react';
import data from '../../data.json';

const shoeData = data.imgURL;

export default class LandingSampleProducts extends Component {
  renderProduct(...arrProduct) {
    return arrProduct.map((item, i) => {
      return (
        <div className="col-md-4 col-sm-12" key={i}>
          <img src={item.imgURL} className="sample-products img-fluid" alt={item.name.toLowerCase().replace(" ","-")} />
          <p className="monteserrat bold mb-0 mt-1">{item.name.toUpperCase()}</p>
          <p className="open-sans">{item.price}$</p>
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
              shoeData.nikeShoes.shoe1, shoeData.nikeShoes.shoe2, shoeData.vansShoes.shoe1
            )}
          </div>
        </div>
        <div>
          <h2 className="sample-header lobster mb-4">Chelsea Boots</h2>
          <div className="row">
            {this.renderProduct(
              shoeData.drmartens.boot1, shoeData.drmartens.boot2, shoeData.drmartens.boot3
            )}
          </div>
        </div>
        {/* <div>
          <h2 className="lobster">Belts</h2>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">1</div>
            <div className="col-md-4 col-sm-4 col-xs-12">2</div>
            <div className="col-md-4 col-sm-4 col-xs-12">3</div>
          </div>
        </div> */}
      </div>
    );
  }
}

//TODO: Star preview on each products
//TODO: Clean up code with reusable components
//TODO: Finding shoe with white background
