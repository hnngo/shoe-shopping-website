import React from 'react';

const feedbacks = [
  "Simply the best experience I have ever had buying running shoes and have bought a fair few over the years. Will definitely be buying shoes again from there and recommending to my friends.",
  "We were very happy with the service provided by Shoeniverse. My sons are quite happy with their new shoes. Shoeniverse's staff was very pleasant, up to speed on the products, and generally looked after us well. We'll be back...",
  "Just a quick note to say Shoeniverse was a pleasure to deal with. Great customer service and knowledge. We will be back this weekend come to purchase another pair of shoes.",
  "One of the best shoe store ever, this is the third time I have been here and I will totally recommend my family and friends this store",
  "I have ordered several pairs of sneakers from Shoeniverse. They have a relatively quick delivery. The prices are absolutely competitive!",
  "Absolutely delighted with my new boots I brought from Shoeniverse! Great customer service skills had a query and they dealt with it so quickly and efficiently will highly recommend them to friends and family.",
  "My first order with Shoe Zone was dealt with in a very good and helpful way from start to finish. The quality of the product is good and I'm very happy with the service and prompt delivery."
];

const name = [
  "Lauren Macias",
  "Sophie-Louise Sheppard",
  "Natalia Castillo",
  "Kalvin Milne",
  "Sanjay Burnett",
  "Tyreke Wharton",
  "Aniela Robles"
];

export default () => {
  const mouseEnter = (e) => {
    // e.target.style.transform = "scale(1.25)";
    e.target.style.height = "150px";
    const id = +e.target.id.slice(e.target.id.length - 1);

    for (let x = 1; x < id; x++) {
      document.querySelector('#ava-' + x).classList.remove("fadeInLeft");
      document.querySelector('#ava-' + x).classList.add("animated", "fadeOutLeft", "faster");

    }

    for (let x = id + 1; x <= 7; x++) {
      document.querySelector('#ava-' + x).classList.remove("fadeInRight");
      document.querySelector('#ava-' + x).classList.add("animated", "fadeOutRight", "faster");
    }

    document.querySelector('#cmt-' + id).classList.toggle("d-none");
    document.querySelector('#cmt-' + id).classList.remove("fadeOutDown");
    document.querySelector('#cmt-' + id).classList.add("fadeInUp");
  }

  const mouseLeave = (e) => {
    // e.target.style.transform = "";
    e.target.style.height = "100px";
    const id = +e.target.id.slice(e.target.id.length - 1);

    for (let x = 1; x < id; x++) {
      document.querySelector('#ava-' + x).classList.remove("fadeOutLeft");
      document.querySelector('#ava-' + x).classList.add("fadeInLeft");
    }

    for (let x = id + 1; x <= 7; x++) {
      document.querySelector('#ava-' + x).classList.remove("fadeOutRight");
      document.querySelector('#ava-' + x).classList.add("fadeInRight");
    }

    document.querySelector('#cmt-' + id).classList.remove("fadeInUp");
    document.querySelector('#cmt-' + id).classList.add("fadeOutDown");
    setTimeout(() =>
      document.querySelector('#cmt-' + id).classList.toggle("d-none"), 300
    );
  }

  const renderAvatar = (number) => {
    const res = [];
    for (let x = 1; x <= number; x++) {
      res.push(
        <div key={x} className="col-sm-1 my-auto">
          <img
            src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`}
            className="feedback-avatar img-ava"
            alt=""
            style={{ height: "100px" }}
            onMouseEnter={(e) => mouseEnter(e)}
            onMouseLeave={(e) => mouseLeave(e)}
            id={"ava-" + x}
          />
        </div>
      )
    }

    return res;
  }

  const renderComment = (number) => {
    const res = [];
    for (let x = 1; x <= number; x++) {
      res.push(
        <div key={x} className="col px-3 d-none animated fast" id={"cmt-" + x}>
          <p className="monteserrat italic">{feedbacks[x - 1]}</p>
          <p className="blockquote-footer text-white">
            {name[x - 1]}
          </p>
        </div>
      )
    }

    return res;
  }

  return (
    <div className="feedback-container img-fluid my-4 py-3">
      <div className="container w-100 py-4">
        <p className="lobster h2 pb-3">What our customers think about us?</p>
        <div className="d-md-none d-lg-block">
          <div className="row my-3 justify-content-md-center feedback-img-container">
            {renderAvatar(7)}
          </div>
          <div className="row my-3">
            {renderComment(7)}
          </div>
        </div>

        <div className="d-none d-md-block d-lg-none">
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
    </div>
  );
}

//TODO: Add ding 1000+ products 1000 positive feedbacks
