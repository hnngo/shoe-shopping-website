import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { purCloseAddToCartModal } from '../../actions';
import { imgURL } from '../../data.json';
import ProductsRecommend from '../products_page/ProductsRecommend';

class CartPopup extends Component {
  constructor(props) {
    super(props);

    // Set up item by tag name
    const dataTag = {};

    for (let key in imgURL.products) {
      for (let keyInside in imgURL.products[key]) {
        for (let keyInsideTag in imgURL.products[key][keyInside]) {
          const productsTag = imgURL.products[key][keyInside][keyInsideTag].tag;
          dataTag[productsTag] = imgURL.products[key][keyInside][keyInsideTag];
        }
      }
    }

    this.state = { data: dataTag };
  }

  renderAddedItem() {
    if (this.props.newItems) {
      return (
        <div className="row mt-2 mb-1">
          <div className="col-sm-5 text-center">
            <img
              src={this.state.data[this.props.newItems[0]].imgURL}
              className="img-fluid cart-modal-img"
              alt={this.state.data[this.props.newItems[0]].name.toLowerCase().replace(" ", "-")}
            />
          </div>
          <div className="col-sm-7">
            <h5 className="mt-2">{this.state.data[this.props.newItems[0]].name}</h5>
            <p className="mt-0 pt-0">Size {this.props.newItems[2]}</p>
            <div className="d-flex justify-content-between">
              <p className="cart-modal-price">{+this.state.data[this.props.newItems[0]].price * +this.props.newItems[1]}$</p>
              <p className="cart-modal-qty mr-1">Qty: {this.props.newItems[1]}</p>
            </div>
          </div>
        </div>
      )
    }
  }

  renderCart() {
    let numberOfItems = 0;
    let totalMoney = 0;

    if (this.props.inCart.length > 0) {
      numberOfItems = this.props.inCart.length;
      totalMoney = this.props.inCart.map((item) => item[1] * this.state.data[item[0]].price).reduce((acc, cur) => acc + cur);
    }

    return (
      <div className="cart-modal-shopping-detail pb-3 px-3 pt-2">
        <h5>Shopping cart <span>({numberOfItems} items)</span></h5>
        <div className="d-flex justify-content-between border-top mt-3 mb-1 pt-1">
          <h5>Total</h5>
          <p className="cart-item-total-money">{totalMoney + 30} SGD</p>
        </div>
        <div className="text-center">
          <Link to="/cart">
            <button
              className="btn btn-outline-secondary mx-1 mb-2"
              onClick={() => this.props.purCloseAddToCartModal()}
            >
              GO TO CART
            </button>
          </Link>
          <button className="btn btn-secondary mx-1 mb-2">
            CHECK OUT
          </button>
        </div>
      </div>
    );
  }

  renderRecommendItems() {
    if (this.props.newItems) {
      return (
        <ProductsRecommend
          optionImgClass="cart-modal-recommend-img"
          itemInfo={this.state.data[this.props.newItems[0]]}
          number={4}
          category={this.props.category}
        />
      );
    }
  }

  renderModal() {
    return (
      <div className="container-fluid mx-2 mt-3">
        <div className="d-flex justify-content-between cart-modal-header">
          <h6 className="open-sans text-success">
            <i className="fas fa-check-circle mr-2" />
            {this.props.newItems ? this.props.newItems[1] : 1} item(s) has been added to your cart
          </h6>
          <button
            onClick={() => this.props.purCloseAddToCartModal()}
            className="cart-modal-close-btn"
          >
            <i className="fas fa-times mr-2"></i>
          </button>
        </div>
        <div className="row">
          <div className="col-sm-7 col-xs-12 cart-modal-item-detail">
            {this.renderAddedItem()}
          </div>
          <div className="d-none d-sm-block col-sm-5">
            {this.renderCart()}
          </div>
        </div>
        <div className="border-top w-100" />
        <div className="row cart-modal-recommendation-items">
          <div className="d-none d-sm-block col-sm-12">
            {this.renderRecommendItems()}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.isSuccessfullyAdded}
          ariaHideApp={false}
          className="cart-modal-notification"
          overlayClassName="cart-modal-notification-overlay"
        >
          {this.renderModal()}
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = ({ UserReducers }) => {
  return {
    isSuccessfullyAdded: UserReducers.isSuccessfullyAdded,
    newItems: UserReducers.newItems,
    inCart: UserReducers.inCart,
  }
}

export default connect(mapStateToProps, {
  purCloseAddToCartModal
})(CartPopup);
