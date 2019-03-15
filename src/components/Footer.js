import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container bg-secondary">
        <div className="container d-flex justify-content-between">
          <p className="mb-0 py-5 text-white">@ Copyright Shoeniverse | Terms | Policies</p>
          <p className="mb-0 py-5 text-white">2019</p>
        </div>
      </div>
    );
  }
}
