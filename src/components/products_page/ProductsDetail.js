import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartPopup from '../cart_page/CartPopupNoti';
import {
  purAddToCart
} from '../../actions';

class ProductsDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenSize: this.props.category === "shoes" ? 8.5 : "XS",
      qty: 1,
      showAlert: false
    }
  }

  handleOnChangeQty(e) {
    switch (e.target.classList[1]) {
      case "fa-arrow-left":
        this.setState({ qty: this.state.qty - 1 });
        break;
      case "fa-arrow-right":
        this.setState({ qty: this.state.qty + 1 });
        break;
      default:
        this.setState({ qty: e.target.value });
    }
  }

  handleClickSize(size) {
    if (!isNaN(size)) {
      size = +size;
    }

    this.setState({ chosenSize: size });
  }

  handleClickAddToCart() {
    if (!this.props.isSignInSuccessfully && !this.props.isCreatingSuccessfully) {
      this.setState({ showAlert: true });
      return;
    }
    
    this.props.purAddToCart(this.props.item.tag, this.state.qty, this.state.chosenSize);
  }

  handleClickAddToWishlist() {
    console.log("add wl");
  }

  renderSize() {
    const sizeShoesArr = [8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];
    const sizeAccessoriesArr = ["XS", "S", "M", "L", "XL"];
    const size = this.props.category === "shoes" ? sizeShoesArr : sizeAccessoriesArr;

    return size.map((item, i) => {
      const chosenSizeBtnClass = (item === this.state.chosenSize) ? "btn-dark" : "btn-outline-dark";

      return (
        <div className="w-25 my-1" key={item}>
          <button
            className={"btn product-detail-size-btn " + chosenSizeBtnClass}
            onClick={(e) => this.handleClickSize(e.target.innerHTML)}
          >
            {item}
          </button>
        </div>
      )
    }
    );
  }

  renderQty() {
    return (
      <div className="w-100 my-3">
        <div className="products-detail-qty-container">
          <i className="fas fa-arrow-left" onClick={(e) => this.handleOnChangeQty(e)}></i>
          <input
            className="w-25 border-0 text-center"
            value={this.state.qty}
            onChange={(e) => this.handleOnChangeQty(e)}
          />
          <i className="fas fa-arrow-right" onClick={(e) => this.handleOnChangeQty(e)}></i>
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

  renderAlert() {
    if (this.state.showAlert) {
      setTimeout(() => this.setState({ showAlert: false }), 3000);
      return (
        <div className="alert alert-danger text-center" role="alert">
          <p className="my-0 py-0">Please Sign In to add items</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 col-sm-7 col-xs-12 text-center">
            <img
              src={this.props.item.imgURL}
              className="detail-products-img img-fluid"
              alt={this.props.item.name.toLowerCase().replace(" ", "-")}
            />
          </div>
          <div className="col-md-4 col-sm-5 col-xs-12">
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
            {this.renderAlert()}
            <button
              type="button"
              className="btn btn-dark btn-block"
              onClick={() => this.handleClickAddToCart()}
            >
              <i className="fas fa-cart-plus mr-2"></i>Add to cart
            </button>
            <button
              type="button"
              className="btn btn-outline-dark btn-block"
              onClick={() => this.handleClickAddToWishlist()}
            >
              <i className="far fa-heart mr-2"></i>Add to wishlist
            </button>
          </div>
        </div>
        <CartPopup />
      </div>
    );
  }
}

const mapStateToProps = ({ AuthReducers }) => {
  return { 
    isSignInSuccessfully: AuthReducers.isSignInSuccessfully,
    isCreatingSuccessfully: AuthReducers.isCreatingSuccessfully,
  };
}

export default connect(mapStateToProps, {
  purAddToCart
})(ProductsDetail)

//TODO: Size guide
//TODO: Click size button to save the state
//TODO: Add more images on other sides of products
//TODO: When click collapse change the icon to "-"
//TODO: Random generate recommendation samples
//TODO: IN adding time, disable add to cart and add to wish list
