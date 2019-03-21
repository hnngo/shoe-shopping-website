import React, { Component } from 'react';

export default class CartCheckout extends Component {
  render() {
    return (
      <div className="cart-item-detail pt-2 px-3 pb-3">
        <h4>Payment Information</h4>
        <form className="mt-3">
          <div className="d-inline">
            <img src={require('../../imgs/visa.svg')}
              className="cart-checkout-svg mr-2" alt="visa" />
            <img src={require('../../imgs/mastercard.svg')}
              className="cart-checkout-svg mr-2" alt="visa" />
            <img src={require('../../imgs/jcb.svg')}
              className="cart-checkout-svg mr-2" alt="visa" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCardNumber" className="bold">Card Number <span className="text-danger h5">*</span></label>
              <input type="text" className="form-control" id="inputCardNumber" placeholder="1234 5678 9012 3456" disabled />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputNameOnCard" className="bold">Name On Card <span className="text-danger h5">*</span></label>
              <input type="text" className="form-control" id="inputNameOnCard" placeholder="Harrison Ngo" disabled />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCVV" className="bold">CVV <span className="text-danger h5">*</span></label>
              <input type="text" className="form-control" id="inputCVV" placeholder="123" disabled />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputNameOnCard" className="bold">Expire Date <span className="text-danger h5">*</span></label>
              <div className="row text-center w-100">
                <input type="text" className="ml-3 form-control" id="inputNameOnCard" placeholder="08" disabled style={{ width: '43px' }} /><h3> / </h3>
                <input type="text" className="form-control" id="inputNameOnCard" placeholder="2022" disabled style={{ width: '68px' }} />
              </div>
            </div>
          </div>
        </form>
        <div className="border-top pb-2" />
        <h4>Billing Adress</h4>
        <form>
          <div className="form-group">
            <label htmlFor="inputAddress" className="bold">Billing Adress <span className="text-danger h5">*</span></label>
            <input type="text" className="form-control" id="inputAddress" placeholder="64 West Beech Rd" disabled />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity" className="bold">City <span className="text-danger h5">*</span></label>
              <input type="text" className="form-control" id="inputCity" disabled placeholder="New York City" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState" className="bold">State <span className="text-danger h5">*</span></label>
              <input type="text" className="form-control" id="inputState" disabled placeholder="New York" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip" className="bold">Zip <span className="text-danger h5">*</span></label>
              <input type="text" className="form-control" id="inputZip" disabled placeholder="10027" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail" className="bold">Email <span className="text-danger h5">*</span></label>
              <input type="text" className="form-control" id="inputEmail" disabled placeholder="example@test.com" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPhone" className="bold">Phone <span className="text-danger h5">*</span></label>
              <input type="text" className="form-control" id="inputPhone" disabled placeholder="518-212-8504" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
