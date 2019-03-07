import React, { Component } from 'react';
import '../styles/PopupNavBar.css';

export default class PopupNavBar extends Component {
  renderPopupShoe() {
    return (
      <div>
        <h1>SHOES</h1>
      </div>
    );
  }

  renderPopupAccessories() {
    return (
      <div>
        <h1>ACCESSORIES</h1>
      </div>
    );
  }

  renderPopupBrands() {
    return (
      <div>
        <h1>BRANDS</h1>
      </div>
    );
  }

  renderPopup(type) {
    let res = undefined;
    if (type === "shoes") {
      res = this.renderPopupShoe();
    } else if (type === "accessories") {
      res = this.renderPopupAccessories();
    } else if (type === "brands") {
      res = this.renderPopupBrands();
    }

    return res;
  }

  render() {
    return (
      <div
        onMouseEnter={this.props.onMouseEnter}
        onMouseOut={this.props.onMouseOut}
        className={`popup-nav-container animated fast ${this.props.animatedStyle} ${this.props.delayTime}`}
      >
        {this.renderPopup(this.props.popupType)}
      </div>
    );
  }
}
