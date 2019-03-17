import React, { Component } from 'react';

export default class ProductsDetail extends Component {
  handleOnChangeQty() {
    console.log("Change Qty")
  }

  renderSize() {
    const sizeArr = [8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];

    return sizeArr.map((item) =>
      <div className="w-25 my-1" key={item}>
        <button
          className="btn btn-outline-dark product-detail-size-btn"
        >
          {item}
        </button>
      </div>
    );
  }

  renderQty() {
    return (
      <div className="w-100 my-3">
        <div className="products-detail-qty-container">
          <i className="fas fa-arrow-left"></i>
          <input
            className="w-25 border-0 text-center"
            value={1}
            onChange={() => this.handleOnChangeQty()}
          />
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    )
  }

  renderCollapse(header, content, show = false) {
    let isShow = show ? "show" : "";
    let headerTag = header.replace(/ /g, "-").toLowerCase();

    return (
      <div className="my-2">
        <div className="d-flex justify-content-between products-detail-collapse">
          <button
            className="products-detail-collapse-header-text"
            type="button"
            data-toggle="collapse"
            data-target={"#collapseDetail-" + headerTag}
          >
            {header}
          </button>
          <div className="d-inline-block">
            <i
              className="fas fa-plus align-middle"
              data-toggle="collapse"
              data-target={"#collapseDetail-" + headerTag}
            />
          </div>
        </div>
        <div
          className={"collapse mt-2 " + isShow}
          id={"collapseDetail-" + headerTag}
        >
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

            {/* Render Collapse products description */}
            {this.renderCollapse("Description", () =>
              <p className="products-detail-des-text">
                {this.props.item.description}
              </p>, false
            )}

            {/* Render Collapse products size selection */}
            {this.renderCollapse("Size", () =>
              <div className="container text-center">
                <div className="row">
                  {this.renderSize()}
                  {this.renderQty()}
                </div>
              </div>, true
            )}

            <button type="button" className="btn btn-dark btn-block">
              <i className="fas fa-cart-plus mr-2"></i>Add to cart
            </button>
            <button type="button" className="btn btn-outline-dark btn-block">
              <i className="far fa-heart mr-2"></i>Add to wishlist
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//TODO: Size guide
//TODO: Click size button to save the state
//TODO: Add more images on other sides of products
//TODO: When click collapse change the icon to "-"
