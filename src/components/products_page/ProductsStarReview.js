import React from 'react';

export default (props) => {
  const renderStar = (number) => {
    const res = [];

    while (res.length < 5) {
      for (let x = 0; x < number; x++) {
        res.push(<i key={props.keyStar + Math.floor(Math.random() * 999999)} className="fas fa-star"></i>);
      }

      res.push(<i key={props.keyStar + Math.floor(Math.random() * 999999)} className="far fa-star"></i>);
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