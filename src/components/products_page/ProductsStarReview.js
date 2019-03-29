import React from 'react';

export default (props) => {
  const renderStar = (number) => {
    const res = [];

    for (let x = 0; x < number; x++) {
      res.push(<i key={props.keyStar + Math.floor(Math.random() * 999999)} className="fas fa-star products-star"></i>);
      
      if (res.length === 5) {
        return res;
      }
    }

    while (res.length < 5) {
      res.push(<i key={props.keyStar + Math.floor(Math.random() * 999999)} className="far fa-star products-star"></i>);
    }

    return res;
  }

  return (
    <div className="row m-0">
      <div className="mx-auto">
        {renderStar(props.starNumber)}
      </div>
    </div>
  );
}