import React, { Component } from 'react';

export default class ProductsDetail extends Component {
  render() {
    return (
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <img src={this.props.item.imgURL} className="sample-products img-fluid" alt={this.props.item.name.toLowerCase().replace(" ", "-")} />
            <h1>1</h1>
          </div>
          <div className="col-sm-6 col-xs-12">
            <p className="monteserrat bold mb-0 mt-1">{this.props.item.name.toUpperCase()}</p>
            <p className="open-sans">{this.props.item.price}$</p>
            <h1>2</h1>
          </div>
        </div>
      </div>
    );
  }
}
