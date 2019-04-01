import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartPopup from '../cart_page/CartPopupNoti';
import {
  purAddToCart,
  purCloseAddToCartModal
} from '../../actions';
import ProductsRecommend from './ProductsRecommend';
import ProductsStarReview from './ProductsStarReview';

class ProductsDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenSize: this.props.category === "shoes" ? 8.5 : "XS",
      qty: 1,
      showAlert: false,
      purchasable: true
    }
  }

  componentDidMount() {
    if (this.props.isSuccessfullyAdded) {
      this.props.purCloseAddToCartModal();
    }

    // Scroll to products when redirect to detail page
    try {
      const y = document.querySelector(".products-path").getBoundingClientRect().top + window.scrollY - 50;

      window.scroll({
        top: y,
        behavior: 'smooth'
      });
    } catch {
      window.scroll({
        top: 300,
        behavior: 'smooth'
      });
    }
  }

  handleOnChangeQty(e) {
    switch (e.target.classList[1]) {
      case "fa-arrow-left":
        if (this.state.qty > 1) {
          this.setState({ qty: this.state.qty - 1 });
        }
        break;
      case "fa-arrow-right":
        this.setState({ qty: this.state.qty + 1 });
        break;
      default:
        return;
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

    // Prevent from double clicking add to cart
    this.setState({ purchasable: false }, () => {
      this.props.purAddToCart(this.props.item.tag, this.state.qty, this.state.chosenSize, this.props.inCart);

      // Turn on if user just dimiss the popup cart noti
      setTimeout(() => this.setState({ purchasable: true }), 500);
    });
  }

  // handleClickAddToWishlist() {
  //   console.log("add wl");
  // }

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
            disabled
            onChange={() => {}}
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
      <div className="my-3">
        <div 
          className="d-flex justify-content-between products-detail-collapse"
          data-toggle="collapse"
          data-target={"#collapseDetail-" + headerTag}
        >
          <button
            className="products-detail-collapse-header-text"
            type="button"
          >
            {header}
          </button>
          <div className="d-inline-block">
            <i className="fas fa-plus align-middle" />
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

  renderInCartAlr() {
    // Render if that products existed in cart already
    return this.props.inCart.map((item, i) => {
      if (item.includes(this.props.item.tag) && item.includes(this.state.chosenSize)) {
        return (
          <div key={i} className="mt-2">
            <p className="italic open-sans text-primary">*There {item[1] > 1 ? "have" : "has"} {item[1]} item(s) in your cart</p>
          </div>
        );
      } else {
        return <div key={i} />;
      }
    });
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
            <h5 className="open-sans mt-2 mb-2">
              {this.props.item.price}$
            </h5>
            <div className="d-flex mb-4">
              <ProductsStarReview
                starNumber={this.props.item.star}
                keyStar={this.props.item.tag}
              />
            </div>
            {/* Render Collapse products description */}
            {this.renderCollapse("Description", () =>
              <p className="products-detail-des-text">
                {this.props.item.description}
              </p>, false
            )}
            {/* Render Collapse products Delivery options */}
            {this.renderCollapse("Delivery", () =>
              <div>
                <div className="d-flex">
                  <i className="fas fa-truck mr-2 orange-text" />
                  <div>
                    <h6 className="mb-0">Free Delivery</h6>
                    <p className="text-muted">5 - 10 days</p>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="fas fa-history mr-2 orange-text" />
                  <div>
                    <h6 className="mb-0">7 days return to seller</h6>
                    <p className="text-muted">Fully refund</p>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="fas fa-shield-alt mr-2 orange-text" />
                  <div>
                    <h6 className="mb-0">6 Months warranty</h6>
                  </div>
                </div>
              </div>, true
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
              disabled={!this.state.purchasable}
              type="button"
              className="btn btn-dark btn-block"
              onClick={() => this.handleClickAddToCart()}
            >
              <i className="fas fa-cart-plus mr-2"></i>Add to cart
            </button>
            {this.renderInCartAlr()}
            {/* <button
              type="button"
              className="btn btn-outline-dark btn-block"
              onClick={() => this.handleClickAddToWishlist()}
            >
              <i className="far fa-heart mr-2"></i>Add to wishlist
            </button> */}
          </div>
        </div>
        <ProductsRecommend
          lineSeparate={true}
          itemInfo={this.props.item}
          category={this.props.category}
          number={4}
        />
        <CartPopup
          category={this.props.category}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignInSuccessfully: state.AuthReducers.isSignInSuccessfully,
    isCreatingSuccessfully: state.AuthReducers.isCreatingSuccessfully,
    inCart: state.UserReducers.inCart,
    isSuccessfullyAdded: state.UserReducers.isSuccessfullyAdded
  };
}

export default connect(mapStateToProps, {
  purAddToCart,
  purCloseAddToCartModal
})(ProductsDetail)

//TODO: Add more images on other sides of products
