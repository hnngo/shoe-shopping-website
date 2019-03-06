import React, { Component } from 'react';
import '../styles/PopupNavBar.css';

export default class PopupNavBar extends Component {
  render() {
    return (
      <div
        onMouseEnter={this.props.onMouseEnter}
        onMouseOut={this.props.onMouseOut}
        className={`popup-nav-container animated fast ${this.props.animatedStyle} ${this.props.delayTime}`}
      >
        <h1>AA</h1>
      </div>
    );
  }
}
