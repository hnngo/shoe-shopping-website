import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PopupNavBar from './PopupNavBar';
import LoginModal from './LoginModal';
import {
  authSignOut
} from '../actions';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false,
      enterPopup: false,
      curTarget: undefined,
      prevTarget: undefined,
      searchKey: "",
    }
  }

  // Handle change the input field of search
  handleOnChangeSearch(e) {
    this.setState({ searchKey: e.target.value });
  }

  // Handle when user presses enter
  handleOnPressSearch(e) {
    if (e.key === "Enter") {
      this.props.history.push(`/search?=${this.state.searchKey}`);
    }
  }

  handleMouseEnter(e) {
    // Preventing show popup on small screen
    if (window.innerWidth < 768) {
      return
    }

    // Show popup and save the current cursor pointing
    this.setState({
      showPopup: true,
      curTarget: e.target.innerHTML.toLowerCase()
    });
  }

  handleTimeOutMouseOut() {
    if (window.innerWidth < 768) {
      return
    }

    // When mouse out, immediately set previous target
    this.setState({ prevTarget: this.state.curTarget });

    // Check if mouse is moved to the popup or switch to next target
    setTimeout(() => {
      if ((this.state.enterPopup === false) && (this.state.prevTarget === this.state.curTarget)) {
        this.setState({
          showPopup: false,
          curTarget: undefined,
          prevTarget: undefined
        });
      }
    }, 300);
  }

  handleClickSignOut() {
    this.props.authSignOut();
  }

  showPopup() {
    // Only showing popup nav bar when on large screen
    if (this.state.showPopup && (window.innerWidth >= 768)) {
      return (
        <PopupNavBar
          onMouseEnter={() => this.setState({ enterPopup: true })}
          onMouseOut={() => this.setState({ enterPopup: false, showPopup: false })}
          popupType={this.state.curTarget}
        />
      );
    }
  }

  // Check if user already signed in or not
  renderUserIcon() {
    // const user = firebase.auth().currentUser;
    if (this.props.isSignInSuccessfully || this.props.isCreatingSuccessfully) {
      return (
        <div className="d-flex">
          <Link to="/cart">
            <div className="navbar-cartIcon">
              <button
                type="button"
                className="btn my-2 my-sm-0"
              >
                <i className="fas fa-shopping-cart" />
                <span
                  className={"badge badge-pill badge-dark" + (
                    this.props.inCart.length > 0 ? "" : " d-none"
                  )}
                >
                  {this.props.inCart.length}
                </span>
              </button>
            </div>
          </Link>
          <div className="btn-group navbar-user-btn mt-auto w-100">
            <button type="button" className="cart-modal-close-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user mr-1" />User
            </button>
            <div className="dropdown-menu w-100 dropdown-menu-right dropdown-menu-lg-left">
              <Link to="/orders">
                <button className="dropdown-item" type="button">Orders</button>
              </Link>
              <div className="dropdown-divider"></div>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => this.handleClickSignOut()}
              >
                Sign Out
            </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <button
          type="button"
          className="btn my-2 my-sm-0"
          data-toggle="modal"
          data-target="#loginModal">
          <i className="fas fa-user" />
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light shadow-sm">
          <div className="container p-0">
            {/* Logo Brand */}
            <Link className="navbar-brand lobster" to="/">
              Shoeniverse
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item">
                  <a className="nav-link" href="/news">News <span className="sr-only">(current)</span></a>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onMouseEnter={(e) => this.handleMouseEnter(e)}
                    onMouseOut={() => this.handleTimeOutMouseOut()}
                    to="/shoes"
                  >
                    Shoes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onMouseEnter={(e) => this.handleMouseEnter(e)}
                    onMouseOut={() => this.handleTimeOutMouseOut()}
                    className="nav-link"
                    to="/accessories"
                  >
                    Accessories
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a
                    onMouseEnter={(e) => this.handleMouseEnter(e)}
                    onMouseOut={() => this.handleTimeOutMouseOut()}
                    className="nav-link"
                    href="/brands"
                  >
                    Brands
                  </a>
                </li> */}
              </ul>
              <input
                className="nav-search form-control mr-sm-2 rounded-pill"
                onSubmit={() => false}
                // type="search"
                placeholder="Search for items and brands"
                style={{ width: "180px" }}
                value={this.state.searchKey}
                onChange={(e) => this.handleOnChangeSearch(e)}
                onKeyPress={(e) => this.handleOnPressSearch(e)}
              />
              {this.renderUserIcon()}
            </div>
          </div>
        </nav>
        {this.showPopup()}
        <LoginModal />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignInSuccessfully: state.AuthReducers.isSignInSuccessfully,
    isCreatingSuccessfully: state.AuthReducers.isCreatingSuccessfully,
    inCart: state.UserReducers.inCart
  }
}

export default withRouter(connect(mapStateToProps, {
  authSignOut
})(NavBar));

//TODO: Color/Style change when at the right path name
