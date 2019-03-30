import React, { Component } from 'react';

export default class ContactForm extends Component {
  render() {
    return (
      <div className="p-0 text-center">
        <div className="mx-auto">
          <h4 className="lobster my-4 text-white">Let us introduce you the best products in our universe</h4>

          <div className="row">
            <div className="col-7">
              <input type="email" className="form-control w-100" id="inputEmailContact" placeholder="example@gmail.com" />
              <small id="emailHelp" className="form-text text-white text-left">We'll never share your email with anyone else.</small>

            </div>
            <div className="col-4">
              <div className="form-check text-left">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label text-white" htmlFor="defaultCheck1">
                  Upcoming Collections
                  </label>
              </div>
              <div className="form-check text-left">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                <label className="form-check-label text-white" htmlFor="defaultCheck2">
                  Promotions, Offers
                  </label>
              </div>
              <div className="form-check text-left">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                <label className="form-check-label text-white" htmlFor="defaultCheck3">
                  News Letters
                  </label>
              </div>
            </div>
            <div className="text-center w-50 mx-auto mt-3">
              <button className="btn btn-outline-light btn-block">Submit</button>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

//TODO: Adding sending email to input email
