import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            {/* Logo Brand */}
            <a className="navbar-brand" href="#">LOGO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/news">News <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Shoes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Accessories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Brands</a>
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
                <input className="form-control mr-sm-2 rounded-pill" type="search" placeholder="Search for items and brands" aria-label="Search" style={{ width: "300px" }}/>
                <button className="btn my-2 my-sm-0"><i class="fas fa-shopping-cart"></i></button>
                <button className="btn my-2 my-sm-0"><i class="fas fa-user"></i></button>
              </form>
            </div>
          </div>
        </nav>
        <h1 class="animated infinite slideOutDown delay-2s">Example</h1>
        <h1 class="animated fadeInDown delay-2s">Example</h1>
        <h1 class="animated zoomInUp delay-2s">Example</h1>
      </div>
    );
  }
}
