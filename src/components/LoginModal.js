import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  authStoreLoginInformation,
  authLoginWithEmailAndPassword,
  authResetLoginInformation
} from '../actions';
import {
  INPUT_EMAIL,
  INPUT_PASSWORD,
  INPUT_CONFIRM_PASSWORD
} from '../constants';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showConfirm: false,
      signingUp: false,
    };
  }

  handleInputAuth(input, type) {
    this.props.authStoreLoginInformation(input, type);
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
    const {
      inputEmail,
      inputPassword,
      authLoginWithEmailAndPassword
    } = this.props;
    console.log("A");
    authLoginWithEmailAndPassword(inputEmail, inputPassword);
  }

  renderSignUpInput() {
    if (this.state.showConfirm) {
      return (
        <div className="form-group animated fadeInDown fast">
          <input
            type="password"
            id="inputConfirmPassword"
            autoComplete="off"
            className="form-control rounded-pill text-center simple-input"
            placeholder="confirm password"
            value={this.props.inputConfirmPassword}
            onChange={(input) => this.handleInputAuth(input.target.value, INPUT_CONFIRM_PASSWORD)}
          />
        </div>
      );
    }
  }

  renderSignIn() {
    if (!this.state.showConfirm) {
      return (
        <button
          type="button"
          id="signInBtn"
          className="btn btn-secondary w-100 rounded-pill my-2 mx-0 animated fadeInUp fast"
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
          id="backToSignInBtn"
          className="btn btn-primary w-100 rounded-pill my-2 mx-0 animated fadeInUp fast"
          onClick={() => this.setState({ showConfirm: false, signingUp: false })}
        >
          <i className="fas fa-chevron-left"></i> Back To Sign In
        </button>
      );
    }
  }

  renderNotification(condition, notification, textAlign = "text-center", textStyle = "italic", fontSize = "mediumText", animation = true) {
    if (condition === false) {
      const classDivStyle = `${textAlign} ${textStyle} ${fontSize} ${animation ? "animated shake" : ""}`
      return (
        <div className={classDivStyle}>
          <p className="login-notification-text">{notification}</p>
        </div>
      );
    }
  }

  render() {
    const {
      inputEmail,
      inputPassword,
      isSigningIn
    } = this.props;

    // Close login modal and reset if no successful attempt to login
    const $closeLoginModalBtn = document.querySelector("#close-login-btn");
    if ($closeLoginModalBtn) {
      $closeLoginModalBtn.onclick = () => this.props.authResetLoginInformation();
    }

    return (
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content login-modal">
            <div className="modal-header">
              <h5 className="modal-title open-sans">Login</h5>
              <button type="button" className="btn" data-dismiss="modal" id="close-login-btn"><i className="fas fa-times"></i></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    id="inputEmail"
                    autoComplete="off"
                    className="form-control rounded-pill text-center simple-input"
                    placeholder="username@example.com"
                    disabled={isSigningIn}
                    value={inputEmail}
                    onChange={(input) => this.handleInputAuth(input.target.value, INPUT_EMAIL)}
                  />
                  {this.renderNotification(this.props.isValidinputEmail, "Please input the correct email", "text-left", "", "smallText", false)}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="inputPassword"
                    autoComplete="off"
                    className="form-control rounded-pill text-center simple-input"
                    placeholder="password"
                    disabled={isSigningIn}
                    value={inputPassword}
                    onChange={(input) => this.handleInputAuth(input.target.value, INPUT_PASSWORD)}
                  />
                  {this.renderNotification(this.props.isValidinputPassword, "Passwords must be at least 6 characters long", "text-left", "", "smallText", false)}
                </div>
                {this.renderSignUpInput()}
                <div className="modal-footer text-center d-block">
                  {this.renderNotification(this.props.isSignInSuccessfully, "Unsuccesful attempt to sign in")}
                  <Dots
                    size={31}
                    color={"#313131"}
                    animating={isSigningIn}
                    className="my-3"
                  />
                  {this.renderSignIn()}
                  <button
                    type="button"
                    id="signUpBtn"
                    className="btn btn-primary w-100 rounded-pill mx-0 my-2"
                    onClick={() => this.handleClickSignUp()}
                  >
                    Sign Up
                  </button>
                  {this.renderBackToSignIn()}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ShoeReducers }) => {
  // Add validation for email, pwd and confirm pwd
  const checkValidateItems = ["inputEmail", "inputPassword", "inputConfirmPassword"]

  checkValidateItems.forEach((item) => {
    let selectItem = document.querySelector('#' + item);
    if (selectItem !== null) {
      selectItem.classList.remove("is-valid", "is-invalid");
      if (ShoeReducers["isValid" + item] === true) {
        selectItem.classList.remove("is-invalid");
        selectItem.classList.add("is-valid");
      } else if (ShoeReducers["isValid" + item] === false) {
        selectItem.classList.remove("is-valid");
        selectItem.classList.add("is-invalid");
      }
    }
  });

  // Check if signin and signup btn clickable
  const signInCondition = ShoeReducers.isValidinputEmail && ShoeReducers.isValidinputPassword;
  const signUpCondition = (signInCondition && ShoeReducers.isValidinputConfirmPassword) || (!document.querySelector("#backToSignInBtn"));

  const $signInUpBtn = new Map();
  $signInUpBtn.set(document.querySelector("#signInBtn"), signInCondition);
  $signInUpBtn.set(document.querySelector("#signUpBtn"), signUpCondition);

  for (let [key, val] of $signInUpBtn) {
    if (key) {
      if (val) {
        key.removeAttribute("disabled", false);
        key.classList.remove("btn-secondary");
        key.classList.add("btn-primary");
      } else {
        key.setAttribute("disabled", true);
        key.classList.remove("btn-primary");
        key.classList.add("btn-secondary");
      }
    }
  };

  // Close login modal after successfully sign in
  if (ShoeReducers.isSignInSuccessfully) {
    document.querySelector("#close-login-btn").click();
  }

  // Return state to props
  return {
    inputEmail: ShoeReducers.inputEmail,
    inputPassword: ShoeReducers.inputPassword,
    inputConfirmPassword: ShoeReducers.inputConfirmPassword,
    isSigningIn: ShoeReducers.isSigningIn,
    isSignInSuccessfully: ShoeReducers.isSignInSuccessfully,
    isValidinputEmail: ShoeReducers.isValidinputEmail,
    isValidinputPassword: ShoeReducers.isValidinputPassword,
    isValidinputConfirmPassword: ShoeReducers.isValidinputConfirmPassword
  }
}

export default connect(mapStateToProps, {
  authStoreLoginInformation,
  authLoginWithEmailAndPassword,
  authResetLoginInformation
})(LoginModal)

//TODO: After login succesfully change the button sign into name or show the personal information
//TODO: When fail login first, reopen the modal wont show again notification
//TODO: Remove outline default of bootstrap
