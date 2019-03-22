import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { imgURL } from '../data.json';

class OrderPage extends Component {
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
      showItem: 1,
      data: dataTag,
      showCheckout: false
    };
  }

  renderTotal() {
    return <div/>
  }

  renderItemsInOrder(orderId) {
    return this.props.orders[orderId].items.map((item, i) => {
      if (i > this.state.showItem) {
        return <div />;
      } else {
        return (
          <div className="row">
            <div className="col-sm-2">
              <img
                src={this.state.data[item[0]].imgURL}
                className="img-fluid my-2"
                alt={this.state.data[item[0]].name.toLowerCase().replace(" ", "-")}
              />
            </div>
            <div className="col-sm-4 my-auto">
              <h5>{this.state.data[item[0]].name}</h5>
              <p>Size: {item[2]}</p>
            </div>
            <div className="col-sm-2 my-auto">
              <p>{this.state.data[item[0]].price}$</p>
            </div>
            <div className="col-sm-2 my-auto">
              <p>Qty: {item[1]}</p>
            </div>
            <div className="col-sm-2 my-auto">
              <span class="badge badge-warning badge-pill">Delivering</span>
            </div>
          </div>
        );
      }
    })
  }

  renderOrders() {
    console.log(this.props.orders)
    const renderArr = [];

    for (let orderId in this.props.orders) {
      renderArr.push(
        <div className="order-page-container mb-4">
          <div className="p-3">
            <div className="d-flex">
              <h5>Order Id:&nbsp;<span>{orderId}</span></h5>
            </div>
            <div className="d-flex">
              <h6 className="text-muted">Order date:&nbsp;<span className="text-muted">{this.props.orders[orderId].orderDate}</span></h6>
              
            </div>
            <div className="border-top pb-2" />
            {this.renderItemsInOrder(orderId)}
            {this.renderSeeMore()}
            {this.renderTotal(orderId)}
          </div>
        </div>
      )
    }

    return renderArr;
    // return this.props.orders.map((order) => {
    //   console.log(order);
    //   return <div/>
    // })
  }

  render() {
    if (this.props.isSignInSuccessfully || this.props.isCreatingSuccessfully) {
      return (
        <div className="container my-5">
          {this.renderOrders()}
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isSignInSuccessfully: state.AuthReducers.isSignInSuccessfully,
    isCreatingSuccessfully: state.AuthReducers.isCreatingSuccessfully,
    orders: state.UserReducers.orders
  };
}

export default connect(mapStateToProps)(OrderPage)