import React, { Component } from 'react';
import data from '../../data.json';

export default () => {
  return (
    <div>
      <div className="shoes-heading-container">
        <img src={data.imgURL.shoesPage.pano.imgURL} className="shoes-heading-picture" alt="shoes-header-picture" />
        <div className="shoes-picture-text text-center">
          <h1 className="lobster">Shoes</h1>
        </div>
      </div>
    </div>
  );
}
