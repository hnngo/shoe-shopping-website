import React, { Component } from 'react';

export default class ProductsDetail extends Component {
  renderSize() {
    const sizeArr = [8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];

    return sizeArr.map((item) =>
      <div className="w-25 my-1" key={item}>
        <button className="btn btn-outline-dark product-detail-size" disabled>{item}</button>
      </div>
    );
  }

  renderCollapse(header, content, show=false) {
    let isShow = show ? "show" : "";

    return (
      <div>
        <div className="d-flex justify-content-between products-detail-collapse">
          <button
            className="products-detail-collapse-header-text"
            type="button"
            data-toggle="collapse"
            data-target="#collapseDetail"
          >
            {header}
          </button>
          <div className="d-inline-block">
            <i
              className="fas fa-plus align-middle"
              data-toggle="collapse"
              data-target="#collapseDetail"
            />
          </div>
        </div>
        <div className={"collapse mt-2 " + isShow} id="collapseDetail">
          {content()}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-7 col-xs-12">
            <img
              src={this.props.item.imgURL}
              className="detail-products-img img-fluid"
              alt={this.props.item.name.toLowerCase().replace(" ", "-")} />
          </div>
          <div className="col-sm-5 col-xs-12">
            <h4 className="monteserrat bold mb-0 mt-1">
              {this.props.item.name}
            </h4>
            <h5 className="open-sans mt-2 mb-4">
              {this.props.item.price}$
            </h5>
            <div className="text-center">
              <div className="row">
                {this.renderSize()}
              </div>
            </div>

            {this.renderCollapse("Description", () =>
              <p className="products-detail-des-text">
                {this.props.item.description}
              </p>, false
            )}
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Add to cart
            </button>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//TODO: Size guide
