import React, { Component } from 'react';
import PopupNavBar from './PopupNavBar';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false,
    }
  }

  handleMouseEnter() {
    this.setState({ showPopup: true });
  }

  handleMouseOut() {
    this.setState({ showPopup: false });
  }

  showPopup() {
    if (this.state.showPopup) {
      return (
        <PopupNavBar
          animatedStyle="fadeIn"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseOut={() => this.handleMouseOut()}
        />
      );
    } else {
      
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
          <div className="container">
            {/* Logo Brand */}
            <a className="navbar-brand" href="/home">LOGO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/news">News <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a
                    className="py-0"
                    onMouseEnter={() => this.handleMouseEnter()}
                    onMouseOut={() => this.handleMouseOut()}
                    className="nav-link"
                    href="/shoes"
                  >
                    Shoes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onMouseEnter={() => this.handleMouseEnter()}
                    onMouseOut={() => this.handleMouseOut()}
                    className="nav-link"
                    href="/accessories"
                  >
                    Accessories
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onMouseEnter={() => this.handleMouseEnter()}
                    onMouseOut={() => this.handleMouseOut()}
                    className="nav-link"
                    href="/brands"
                  >
                    Brands
                  </a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li> 
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>*/}
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2 rounded-pill" type="search" placeholder="Search for items and brands" aria-label="Search" style={{ width: "220px" }} />
                <button className="btn my-2 my-sm-0"><i className="fas fa-shopping-cart"></i></button>
                <button className="btn my-2 my-sm-0"><i className="fas fa-user"></i></button>
              </form>
            </div>
          </div>
        </nav>
        {this.showPopup()}
      </div>
    );
  }
}

//TODO: Color change
//TODO: Style change when clicking
//TODO: Small device not show the border bottom-line
//TODO: Popup problem
