import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from '../../actions';
import { imgURL } from '../../data.json';

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

    this.state = { data: dataTag };
  }

  renderItemsInCart() {
    const { data } = this.state;

    if (this.props.inCart.length > 0) {
      return this.props.inCart.map((item, i) => {
        return (
          <div key={i} className="row cart-item-detail">
            <div className="col-sm-4">
              <img
                src={data[item[0]].imgURL}
                className="img-fluid my-2"
                alt={data[item[0]].name.toLowerCase().replace(" ", "-")}
              />
            </div>
            <div className="col-sm-8">
              <h5 className="mt-2">{data[item[0]].name}</h5>
              <p className="">Size {item[2]}</p>
              <div className="d-flex justify-content-between">
                <p className="cart-modal-price">{+data[item[0]].price * +item[1]}$</p>
                <div className="">
                  <div className="text-right">
                    <i className="fas fa-trash-alt mr-4"></i>
                    <i className="fas fa-minus" onClick={(e) => { }}></i>
                    <input
                      className="border-0 text-center cart-item-qty"
                      value={item[1]}
                      onChange={(e) => { }}
                    />
                    <i className="fas fa-plus" onClick={(e) => { }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    }
  }

  renderTotal() {
    return (
      <div className="cart-item-detail pb-3 px-3">
        <h4>Order Summary</h4>
        <div className="d-flex justify-content-between">
          <p>Subtotal (n items)</p>
          <p>1000 SGD</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Shipping fee</p>
          <p>30 SGD</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Total</p>
          <p>1030 SGD</p>
        </div>
        <button className="btn btn-block btn-secondary">
          PROCEED TO CHECK OUT
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-sm-8 hidden-small-screen">
            {this.renderItemsInCart()}
          </div>
          <div className="col-sm-4 col-12">
            {this.renderTotal()}
          </div>
          <div className="col-sm-0 col-12">
            {this.renderItemsInCart()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UserReducers }) => {
  // Store items in a list
  const inCart = Object.values(UserReducers.inCart);

  return { inCart };
}

export default connect(mapStateToProps, {

})(CartItems);

//TODO: Show all of same categories shooes
//TODO: One button to scoll to check out on small screen
//TODO: Need pano image on cart check out
//TODO: Show need to login to see cart or dont show cart item and block access to cart if not login
