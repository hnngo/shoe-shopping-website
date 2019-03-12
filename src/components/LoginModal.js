import React, { Component } from 'react';

export default class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showConfirm: false,
      signingUp: false,
    };
  }

  handleClickSignUp() {
    // In case when user click 2 times consecutive sign up
    if (!this.state.signingUp) {
      this.setState({ showConfirm: true, signingUp: true });
    } else {
      console.log("TODO: On click sign up")
    }
  }

  handleClickSignIn() {
    console.log("TODO: On click sign in")
  }

  renderSignUp() {
    if (this.state.showConfirm) {
      return (
        <div className="form-group animated fadeInDown fast">
          <input type="password" className="form-control rounded-pill text-center" placeholder="confirm password" />
        </div>
      );
    }
  }

  renderSignIn() {
    if (!this.state.showConfirm) {
      return (
        <button
          type="button"
          className="btn btn-primary w-100 rounded-pill my-2 mx-0 animated fadeInUp fast"
          onClick={() => this.handleClickSignIn()}
        >
          Sign In
        </button>
      );
    }
  }

  renderBackToSignIn() {
    if (this.state.showConfirm) {
      return (
        <button 
          type="button"
          className="btn btn-primary w-100 rounded-pill my-2 mx-0 animated fadeInUp fast"
          onClick={() => this.setState({ showConfirm: false, signingUp: false })}
        >
          <i className="fas fa-chevron-left"></i> Back To Sign In
        </button>
      );
    }
  }

  render() {
    return (
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content login-modal">
            <div className="modal-header">
              <h5 className="modal-title open-sans">Login</h5>
              <button type="button" data-dismiss="modal" className="btn"><i className="fas fa-times"></i></button>
              {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button> */}
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input type="email" className="form-control rounded-pill text-center" placeholder="username@example.com" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control rounded-pill text-center" placeholder="password" />
                </div>
                {this.renderSignUp()}
              </form>

              <div className="modal-footer text-center d-block">
                {this.renderSignIn()}
                <button
                  type="button"
                  className="btn btn-primary w-100 rounded-pill mx-0 my-2"
                  onClick={() => this.handleClickSignUp()}
                >
                  Sign Up
                </button>
                {this.renderBackToSignIn()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
