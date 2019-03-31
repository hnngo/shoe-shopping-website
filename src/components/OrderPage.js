import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { imgURL } from '../data.json';
import ProductsHeader from './products_page/ProductsHeader.js';

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
      btnSee: "See more",
      data: dataTag,
      showCheckout: false
    };
  }

  componentDidMount() {
    //  products when redirect to detail page
    window.scrollTo(0, 0);
  }

  renderTotal(orderId) {
    return <div />
  }

  renderSeeMore(orderId) {
    // Render button see more only when order has more than two items
    if (this.props.orders[orderId].items.length > 2) {
      return (
        <button
          className="btn btn-outline-secondary mx-auto rounded-pill mt-2"
          onClick={() => this.setState({
            btnSee: (this.state.btnSee === "See more" ? "See less" : "See more")
          })}
          data-toggle="collapse"
          data-target={"#order" + orderId}
        >
          {this.state.btnSee}
        </button>
      )
    }
  }

  renderDeliverStatus(order) {
    const today = new Date();
    const deliveryDate = new Date(order.deliveryDate)
    if (deliveryDate <= today) {
      return (
        <span className="badge badge-success badge-pill">Delivered</span>
      );
    }

    return (
      <span className="badge badge-warning badge-pill">Delivering</span>
    );;
  }

  renderItemsInOrder(orderId) {
    return this.props.orders[orderId].items.map((item, i) => {
      return (
        <div
          key={orderId + " " + i}
          id={i > 1 ? "order" + orderId : ""}
          className={"row " + (i > 1 ? "collapse" : "")}
        >
          <div className="w-100 border-top pb-2 mt-2" />
          <div className="col-sm-2 col-xs-12 text-center">
            <img
              src={this.state.data[item[0]].imgURL}
              className="img-fluid my-2 order-img"
              alt={this.state.data[item[0]].name.toLowerCase().replace(" ", "-")}
            />
          </div>
          <div className="col-sm-4 col-xs-12 my-auto">
            <h5>{this.state.data[item[0]].name}</h5>
            <p className="my-0">Size: {item[2]}</p>
          </div>

          <div className="d-block d-sm-none col-12 mt-2">
            <div className="row">
              <div className="col-sm-1 col-2 my-auto text-center d-block d-sm-none">
                <p className="my-0 bold">Price</p>
              </div>
              <div className="col-sm-1 col-2 my-auto text-center d-block d-sm-none">
                <p className="my-0 bold">Qty</p>
              </div>
              <div className="col-sm-2 col-3 my-auto text-center d-block d-sm-none">
                <p className="my-0 bold">Total</p>
              </div>
              <div className="col-sm-2 col-5 my-auto text-center d-block d-sm-none">
                <p className="my-0 bold">Status</p>
              </div>
            </div>
          </div>

          <div className="col-sm-1 col-2 my-auto text-center">
            <p className="my-0">{this.state.data[item[0]].price}$</p>
          </div>
          <div className="col-sm-1 col-2 my-auto text-center">
            <p className="my-0">{item[1]}</p>
          </div>
          <div className="col-sm-2 col-3 my-auto text-center">
            <p className="my-0">{this.state.data[item[0]].price * item[1]}$</p>
          </div>
          <div className="col-sm-2 col-5 my-auto text-center">    
            {this.renderDeliverStatus(this.props.orders[orderId])}
          </div>
        </div>
      );
    })
  }

  renderOrders() {
    const renderArr = [];

    // Render no orders
    if (Object.keys(this.props.orders).length === 0) {
      return (
        <div className="order-page-container mb-4">
          <h4 className="p-3">No recent orders</h4>
        </div>
      );
    }

    for (let orderId in this.props.orders) {
      renderArr.push(
        <div
          key={orderId}
          className="order-page-container mb-4"
        >
          <div className="p-3">
            <div className="d-flex">
              <h5>Order Id:&nbsp;<span>{orderId}</span></h5>
            </div>
            <div className="d-flex">
              <h6 className="text-muted">Order time:&nbsp;<span className="text-muted">{this.props.orders[orderId].orderDate}</span></h6>
            </div>
            <div className="d-none d-sm-block border-top pb-2" />

            <div className="row">
              <div className="col-sm-2 text-center d-none d-sm-block">
                <h5>Item</h5>
              </div>
              <div className="col-sm-4 d-none d-sm-block">
                <h5>Name & Size</h5>
              </div>
              <div className="col-sm-1 text-center d-none d-sm-block">
                <h5>Price</h5>
              </div>
              <div className="col-sm-1 text-center d-none d-sm-block">
                <h5>Qty</h5>
              </div>
              <div className="col-sm-2 text-center d-none d-sm-block">
                <h5>Total</h5>
              </div>
              <div className="col-sm-2 text-center d-none d-sm-block">
                <h5>Status</h5>
              </div>
            </div>

            {this.renderItemsInOrder(orderId)}
            <div className="text-center d-flex">
              {this.renderSeeMore(orderId)}
            </div>
            {this.renderTotal(orderId)}
          </div>
        </div>
      )
    }

    return renderArr;
  }

  render() {
    if (this.props.isSignInSuccessfully || this.props.isCreatingSuccessfully) {
      return (
        <div>
          <ProductsHeader
            panoImageURL={imgURL.pages.orderPage.pano.imgURL}
            categoryName="Orders"
          />
          <div className="container my-5">
            {this.renderOrders()}
          </div>
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

//TODO: Restyle rendering no order
