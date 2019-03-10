import React, { Component } from 'react';

export default class LandingContactForm extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="lobster my-4">Let us introduce you the best products in our universe</h3>
        <form>
          <div className="form-group row">
            <label for="inputEmail" className="col-sm-2 col-form-label text-right">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail" placeholder="example@gmail.com" />
              <small id="emailHelp" className="form-text text-muted text-left">We'll never share your email with anyone else.</small>
            </div>
          </div>
          <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0 text-right">Receives our</legend>
              <div className="col-sm-10">
                <div className="form-check text-left">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Upcoming Collections
                  </label>
                </div>
                <div className="form-check text-left">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                  <label class="form-check-label" for="defaultCheck2">
                    Promotions/Offers
                  </label>
                </div>
                <div className="form-check text-left">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                  <label class="form-check-label" for="defaultCheck3">
                    New Letters
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <button type="submit" className="btn btn-secondary btn-block">Submit</button>
        </form>
      </div>
    );
  }
}

//TODO: Submit button small when large screen
//TODO: Adding sending email to input email
