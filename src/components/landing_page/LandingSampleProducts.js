import React, { Component } from 'react';
import data from '../../data.json';

const shoeData = data.imgURL;

export default class LandingSampleProducts extends Component {
  render() {
    return (
      <div className="container my-5">
        <div>
          <h2 className="sample-header lobster mb-4">Sneakers</h2>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <img src={shoeData.nikeShoes.shoe1.imgURL} className="sample-products img-fluid" alt="nike-shoe-air-retro-9" />
              <p className="monteserrat bold mb-0 mt-1">{shoeData.nikeShoes.shoe1.name}</p>
              <p className="open-sans">{shoeData.nikeShoes.shoe1.price}$</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src={shoeData.adidasShoes.shoe1.imgURL} className="sample-products img-fluid" alt="nike-shoe-air-retro-9" />
              <p className="monteserrat bold mb-0">{shoeData.adidasShoes.shoe1.name}</p>
              <p className="open-sans">{shoeData.adidasShoes.shoe1.price}$</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src={shoeData.vansShoes.shoe1.imgURL} className="sample-products img-fluid" alt="nike-shoe-air-retro-9" />
              <p className="monteserrat bolds mb-0">{shoeData.vansShoes.shoe1.name}</p>
              <p className="open-sans">{shoeData.vansShoes.shoe1.price}$</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="lobster">Chelsea Boots</h2>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">1</div>
            <div className="col-md-4 col-sm-4 col-xs-12">2</div>
            <div className="col-md-4 col-sm-4 col-xs-12">3</div>
          </div>
        </div>
        <div>
          <h2 className="lobster">Belts</h2>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">1</div>
            <div className="col-md-4 col-sm-4 col-xs-12">2</div>
            <div className="col-md-4 col-sm-4 col-xs-12">3</div>
          </div>
        </div>
      </div>
    );
  }
}

//TODO: Star preview on each products
//TODO: Clean up code with reusable components
