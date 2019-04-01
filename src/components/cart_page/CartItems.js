import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { imgURL } from '../../data.json';
import {
  purRemoveFromCart,
  purUpdateCart,
  purPlaceOrder
} from '../../actions';
import CartCheckout from './CartCheckout.js';

class CartItems extends Component {
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
    
    this.state = {
      data: dataTag,
      showCheckout: false
    };
  }

  componentDidMount() {
    // Scroll to products when redirect to page
    window.scrollTo(0, 0);

    // If navigate from popup noti, then go to place order after 500ms
    try {
      if (this.props.location.state.gotoOrder) {
        let $placeOrderBtn =  document.querySelector('#checkoutBtn');

        if ($placeOrderBtn && !this.state.showCheckout) {
          setTimeout(() => $placeOrderBtn.click(), 500);
        }
      }
    } catch {
      return;
    }
  }

  handleClickRemove(refID) {
    this.props.purRemoveFromCart(refID);
  }

  handleClickIncDec(e, item) {
    const newVal = item.slice();

    switch (e.target.classList[1]) {
      case "fa-minus":
        if (newVal[1] === 1) {
          return;
        }

        newVal[1] -= 1;
        break;
      case "fa-plus":
        newVal[1] += 1;
        break;
      default:
        return;
    }

    this.props.purUpdateCart(newVal);
  }

  handleClickCheckout() {
    // Hanle if items in cart to check out
    if (this.props.inCart.length === 0) {
      return;
    }

    this.setState({ showCheckout: true });

    const $containerItems = document.querySelector(".cart-item-summary");
    const $containerCheckout = document.querySelector(".cart-item-checkout");

    $containerItems.classList.add("bounceOutLeft");
    $containerCheckout.classList.remove("bounceOutLeft");

    setTimeout(() => {
      $containerItems.classList.add("d-none");
      $containerCheckout.classList.remove("d-none");
      $containerCheckout.classList.add("bounceInLeft");
    }, 200)
  }

  handleClickBackToCart() {
    this.setState({ showCheckout: false });
    const $containerItems = document.querySelector(".cart-item-summary")
    const $containerCheckout = document.querySelector(".cart-item-checkout")

    $containerCheckout.classList.remove("bounceInLeft");
    $containerCheckout.classList.add("bounceOutLeft");

    setTimeout(() => {
      $containerCheckout.classList.add("d-none");
      $containerItems.classList.remove("d-none");
      $containerItems.classList.remove("bounceOutLeft");
      $containerItems.classList.add("bounceInLeft");
    }, 200)
  }

  handleClickPlaceOrder() {
    // Perform place order in firebase here
    this.props.purPlaceOrder(this.props.inCart);

    // Redirect to order page
    this.props.history.push('/orders')
  }

  renderItemsInCart() {
    const { data } = this.state;

    if (this.props.inCart.length > 0) {
      return this.props.inCart.map((item, i) => {
        return (
          <div key={i} className="row cart-item-detail">
            <div className="col-sm-4 text-center">
              <img
                src={data[item[0]].imgURL}
                className="img-fluid my-2"
                alt={data[item[0]].name.toLowerCase().replace(" ", "-")}
              />
            </div>
            <div className="col-sm-8 d-flex flex-column align-items-start">
              <div className="mb-auto">
                <h5 className="mt-2">{data[item[0]].name}</h5>
                <p className="">Size {item[2]}</p>
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <p className="cart-modal-price">{+data[item[0]].price * +item[1]}$</p>
                  <div className="">
                    <div className="text-right">
                      <i
                        className="fas fa-trash-alt mr-4"
                        onClick={() => this.handleClickRemove(item[3])}
                      />
                      <i
                        className="fas fa-minus"
                        onClick={(e) => this.handleClickIncDec(e, item)}
                      />
                      <input
                        className="border-0 text-center cart-item-qty"
                        value={item[1]}
                        disabled
                      />
                      <i
                        className="fas fa-plus"
                        onClick={(e) => this.handleClickIncDec(e, item)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    } else {
      return (
        <div className="cart-item-detail p-4">
          <h5>No item(s) in cart</h5>
        </div>
      )
    }
  }

  renderPlaceOrderBtn() {
    return (this.state.showCheckout) ? (
      // <Link to="/orders">
        <button
          id="checkoutBtn"
          className="btn btn-block btn-secondary mb-3"
          onClick={() => this.handleClickPlaceOrder()}
        >
          PLACE ORDER
        </button>
      // </Link>
    ) : (
      <button
        id="checkoutBtn"
        className="btn btn-block btn-secondary"
        onClick={() => this.handleClickCheckout()}
      >
        PROCEED TO CHECK OUT
      </button>
    );
  }

  renderBackToCart() {
    if (this.state.showCheckout) {
      return (
        <button
          className="btn btn-block btn-outline-secondary animated fadeInUp"
          onClick={() => this.handleClickBackToCart()}
        >
          BACK TO CART
        </button>
      );
    }
  }

  renderTotal() {
    let numberOfItems = 0;
    let totalMoney = 0;

    if (this.props.inCart.length > 0) {
      numberOfItems = this.props.inCart.length;
      totalMoney = this.props.inCart.map((item) => item[1] * this.state.data[item[0]].price).reduce((acc, cur) => acc + cur);
    }

    return (
      <div className="cart-item-detail pb-3 px-3 pt-2">
        <h4>Order Summary</h4>
        <div className="d-flex justify-content-between">
          <p>Subtotal ({numberOfItems} items)</p>
          <p>{totalMoney} SGD</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Shipping fee</p>
          <p>{numberOfItems > 0 ? 30 : 0} SGD</p>
        </div>
        <div className="d-flex justify-content-between border-top mt-2 mb-1 pt-1">
          <p className="h5">Total</p>
          <p className="cart-item-total-money">{totalMoney + (numberOfItems > 0 ? 30 : 0)} SGD</p>
        </div>
        {this.renderPlaceOrderBtn()}
        {this.renderBackToCart()}
      </div>
    );
  }

  render() {
    if (this.props.isSignInSuccessfully || this.props.isCreatingSuccessfully) {
      return (
        <div className="cart-item-container mt-3 mb-5 pb-3">
          <div className="row">
            <div className="col-sm-8 cart-item-summary animated">
              {this.renderItemsInCart()}
            </div>
            <div className="col-sm-8 d-none cart-item-checkout animated">
              <CartCheckout />
            </div>
            <div className="col-sm-4">
              {this.renderTotal()}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Redirect to="/" />
      );
    }
  }
}

const mapStateToProps = (state) => {
  // Store items in a list
  const inCart = Object.values(state.UserReducers.inCart);

  return {
    inCart,
    isSignInSuccessfully: state.AuthReducers.isSignInSuccessfully,
    isCreatingSuccessfully: state.AuthReducers.isCreatingSuccessfully
  };
}

export default connect(mapStateToProps, {
  purRemoveFromCart,
  purUpdateCart,
  purPlaceOrder
})(CartItems);
