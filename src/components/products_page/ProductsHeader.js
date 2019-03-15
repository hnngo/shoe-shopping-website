import React from 'react';
import data from '../../data.json';

export default () => {
  return (
    <div>
      <div className="products-heading-container">
        <img 
          src={data.imgURL.shoesPage.pano.imgURL} 
          className="products-heading-picture" 
          alt="products-header-pano"
        />
        <div className="products-picture-text text-center">
          <h1 className="lobster">Shoes</h1>
        </div>
      </div>
    </div>
  );
}
