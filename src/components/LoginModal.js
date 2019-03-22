import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  authStoreLoginInformation,
  authLoginWithEmailAndPassword,
  authResetLoginInformation,
  authCreateAccountWithEmailAndPassword
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

    // Close login modal and reset if no successful attempt to login
    //TODO:
    const $closeLoginModalBtn = document.querySelector("#close-login-btn");
    if ($closeLoginModalBtn && !this.props.isSignInSuccessfully) {
      $closeLoginModalBtn.onclick = () => this.props.authResetLoginInformation();
    }
  }

  handleInputAuth(input, type) {
    this.props.authStoreLoginInformation(input, type);
  }

  handleClickSignUp() {
    // In case when user click 2 times consecutive sign up
    if (!this.state.signingUp) {
      this.setState({ showConfirm: true, signingUp: true });
    } else {
      this.props.authCreateAccountWithEmailAndPassword(this.props.inputEmail, this.props.inputPassword);
    }
  }

  handleClickSignIn() {
    const {
      inputEmail,
      inputPassword,
      authLoginWithEmailAndPassword
    } = this.props;

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
          {this.renderNotification(this.props.isValidinputConfirmPassword, "Your password and confirmation password do not match", "text-left", "", "small-text", false)}
        </div>
      );
    }
  }

  renderSignIn() {
    const {
      isValidinputEmail,
      isValidinputPassword,
    } = this.props;

    // Check if signin btn clickable
    const signInCondition = isValidinputEmail && isValidinputPassword;
    
    if (!this.state.showConfirm) {
      return signInCondition ? (
        <button
          type="button"
          id="signInBtn"
          className={"btn btn-primary w-100 rounded-pill my-2 mx-0 animated fadeInUp fast"}
          onClick={() => this.handleClickSignIn()}
        >
          Sign In
        </button>
      ) : (
          <button
            type="button"
            id="signInBtn"
            disabled
            className={"btn btn-secondary w-100 rounded-pill my-2 mx-0 animated fadeInUp fast"}
          >
            Sign In
        </button>
        );
    }
  }

  renderSignUp() {
    const {
      isValidinputEmail,
      isValidinputPassword,
      isValidinputConfirmPassword
    } = this.props;

    // Check if signup btn clickable
    const signUpCondition = (isValidinputEmail && isValidinputPassword && isValidinputConfirmPassword) || (!this.state.showConfirm);

    return signUpCondition ? (
      <button
        type="button"
        id="signUpBtn"
        className="btn btn-primary w-100 rounded-pill mx-0 my-2"
        onClick={() => this.handleClickSignUp()}
      >
        Sign Up
      </button>
    ) : (
      <button
        type="button"
        id="signUpBtn"
        disabled
        className="btn btn-secondary w-100 rounded-pill mx-0 my-2"
      >
        Sign Up
      </button>
    );
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

  renderNotification(condition, notification, textAlign = "text-center", textStyle = "italic", fontSize = "medium-text", animation = true) {
    if (condition === false) {
      const classDivStyle = `${textAlign} ${textStyle} ${fontSize} ${animation ? "animated shake" : ""}`
      return (
        <div className={classDivStyle}>
          <p className="login-notification-text">{notification}</p>
        </div>
      );
    }
  }

  componentDidMount() {
    const $loginModal = document.querySelector('#loginModal')
    if ($loginModal) {
      $loginModal.addEventListener('keypress', (e) => {
        const { isValidinputEmail, isValidinputPassword } = this.props;
    
        // Check if signin btn clickable
        const signInCondition = isValidinputEmail && isValidinputPassword;
        if (signInCondition && e.key === "Enter") {
          document.querySelector("#signInBtn").click();
        }
      })
    }

  }

  render() {
    const {
      inputEmail,
      inputPassword,
      isSigningIn,
      isCreating,
      isValidinputEmail,
      isValidinputPassword,
      isSignInSuccessfully,
      isCreatingSuccessfully
    } = this.props;


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
                  {this.renderNotification(isValidinputEmail, "Please input the correct email", "text-left", "", "small-text", false)}
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
                  {this.renderNotification(isValidinputPassword, "Passwords must be at least 6 characters long", "text-left", "", "small-text", false)}
                </div>
                {this.renderSignUpInput()}
                <div className="modal-footer text-center d-block">
                  {this.renderNotification(isSignInSuccessfully, "Unsuccesful attempt to sign in")}
                  {this.renderNotification(isCreatingSuccessfully, "The username has already been used")}
                  <Dots
                    size={31}
                    color={"#313131"}
                    animating={isSigningIn || isCreating}
                    className="my-3"
                  />
                  {this.renderSignIn()}
                  {this.renderSignUp()}
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

const mapStateToProps = ({ AuthReducers }) => {
  // Add validation for email, pwd and confirm pwd
  const checkValidateItems = ["inputEmail", "inputPassword", "inputConfirmPassword"]

  checkValidateItems.forEach((item) => {
    let selectItem = document.querySelector('#' + item);
    if (selectItem !== null) {
      selectItem.classList.remove("is-valid", "is-invalid");
      if (AuthReducers["isValid" + item] === true) {
        selectItem.classList.remove("is-invalid");
        selectItem.classList.add("is-valid");
      } else if (AuthReducers["isValid" + item] === false) {
        selectItem.classList.remove("is-valid");
        selectItem.classList.add("is-invalid");
      }
    }
  });

  // Close login modal after successfully sign in
  if (AuthReducers.isSignInSuccessfully || AuthReducers.isCreatingSuccessfully) {
    document.querySelector("#close-login-btn").click();
  }

  // Return state to props
  return {
    inputEmail: AuthReducers.inputEmail,
    inputPassword: AuthReducers.inputPassword,
    inputConfirmPassword: AuthReducers.inputConfirmPassword,
    isSigningIn: AuthReducers.isSigningIn,
    isSignInSuccessfully: AuthReducers.isSignInSuccessfully,
    isValidinputEmail: AuthReducers.isValidinputEmail,
    isValidinputPassword: AuthReducers.isValidinputPassword,
    isValidinputConfirmPassword: AuthReducers.isValidinputConfirmPassword,
    isCreating: AuthReducers.isCreating,
    isCreatingSuccessfully: AuthReducers.isCreatingSuccessfully
  }
}

export default connect(mapStateToProps, {
  authStoreLoginInformation,
  authLoginWithEmailAndPassword,
  authResetLoginInformation,
  authCreateAccountWithEmailAndPassword
})(LoginModal)

//TODO: When fail login first, reopen the modal wont show again notification
//TODO: Login information wont save if close the modal
//TODO: Signout button was hidden in small screen
//TODO: When being redirected show login modal
