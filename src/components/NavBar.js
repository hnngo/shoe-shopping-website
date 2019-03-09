import React, { Component } from 'react';
import PopupNavBar from './PopupNavBar';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopup: false,
      enterPopup: false,
      curTarget: undefined,
      prevTarget: undefined
    }
  }

  handleMouseEnter(e) {
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

  showPopup() {
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

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light shadow-sm">
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
                    className="nav-link"
                    onMouseEnter={(e) => this.handleMouseEnter(e)}
                    onMouseOut={() => this.handleTimeOutMouseOut()}
                    href="/shoes"
                  >
                    Shoes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onMouseEnter={(e) => this.handleMouseEnter(e)}
                    onMouseOut={() => this.handleTimeOutMouseOut()}
                    className="nav-link"
                    href="/accessories"
                  >
                    Accessories
                  </a>
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
