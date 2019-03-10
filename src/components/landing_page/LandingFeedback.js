import React, { Component } from 'react';

export default class LandingFeedback extends Component {
  render() {
    return (
      <div className="feedback-container img-fluid my-4 py-3">
        <div className="container">
          <div className="row my-3">
            <div className="col-sm-3">
              <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`} className="feedback-avatar img-fluid" alt="user-1" />
            </div>
            <div className="col-sm-9 pt-3  text-quote">
              <p className="monteserrat italic">Simply the best experience I have ever had buying running shoes and have bought a fair few over the years. Will definitely be buying shoes again from there and recommending to my friends.</p>
              <p className="blockquote-footer text-white">
                Ray Meade
            </p>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm-3">
              <img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`} className="feedback-avatar img-fluid" alt="user-1" />
            </div>
            <div className="col-sm-9 pt-3 text-quote">
              <p className="monteserrat italic">We were very happy with the service provided by Shoeniverse. My sons are quite happy with their new shoes. Shoeniverse's staff was very pleasant, up to speed on the products, and generally looked after us well. We'll be back...</p>
              <p className="blockquote-footer text-white">
                Eliza Althea
            </p>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-sm-3">
              <img src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`} className="feedback-avatar img-fluid" alt="user-1" />
            </div>
            <div className="col-sm-9 pt-3 text-quote">
              <p className="monteserrat italic">Just a quick note to say Shoeniverse was a pleasure to deal with. Great customer service and knowledge. We will be back this weekend come to purchase another pair of shoes.</p>
              <p className="blockquote-footer text-white">
                Michelle Austern
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
