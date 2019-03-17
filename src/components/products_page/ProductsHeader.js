import React from 'react';

export default (props) => {
  return (
    <div>
      <div className="products-heading-container shadow">
        <img 
          src={props.panoImageURL} 
          className="products-heading-picture" 
          alt="products-header-pano"
        />
        <div className="products-picture-text-container text-center">
          <p className="products-picture-text lobster">{props.categoryName}</p>
        </div>
      </div>
    </div>
  );
}
