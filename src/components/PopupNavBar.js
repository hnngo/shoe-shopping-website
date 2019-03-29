import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterProducts } from '../actions';
import data from '../data.json';
import {
  FILTER_SHOES,
  FILTER_ACCESSORIES,
  FILTER_SHOES_SELECTIONS,
  FILTER_ACCESSORIES_SELECTIONS,
  FILTER_BOOTS,
  FILTER_CHELSEA_BOOTS,
  FILTER_SNEAKER
} from '../constants';

class PopupNavBar extends Component {
  handleClickNavItems(type, filterContent) {
    this.props.filterProducts(filterContent);
    this.props.history.push(`/${type}`);
  }

  renderPopupShoe() {
    const { shoes } = data.imgURL.products;
    const item1 = shoes.drmartens.boot1;
    const item2 = shoes.vansShoes.shoe2;

    return (
      <div className="container-fluid py-3 popup-nav">
        <div className="row">
          <div className="col1 col-lg-3">
            <Link to="/shoes">
              <h1 className="lobster text-right display-4">Shoes</h1>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3">
            <h5 className="bold">BY BRANDS</h5>
            <div className="w-75 border-top pb-2 mt-2" />
            {this.renderList(data.navbar.shoes.byBrand, ...Object.values(FILTER_SHOES_SELECTIONS))}
          </div>
          <div className="col-lg-2 col-md-3">
            <h5 className="bold">BY TYPES</h5>
            <div className="w-75 border-top pb-2 mt-2" />
            {this.renderList(data.navbar.shoes.byStyle, FILTER_SNEAKER, FILTER_BOOTS, FILTER_CHELSEA_BOOTS)}
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="row">
              <div className="col-6">
                <Link to={"/shoes/" + item1.tag}>
                  <img src={item1.imgURL} alt="" className="img-fluid popup-nav-img" />
                </Link>
              </div>
              <div className="col-6">
                <Link to={"/shoes/" + item2.tag}>
                  <img src={item2.imgURL} alt="" className="img-fluid popup-nav-img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderPopupAccessories() {
    const { accessories } = data.imgURL.products;
    const item1 = accessories.bags.bag2;
    const item2 = accessories.belts.belt3;
    const item3 = accessories.sunglasses.sunglass3;

    return (
      <div className="container-fluid py-3 popup-nav">
        <div className="row">
          <div className="col1 col-lg-3">
            <Link to="/accessories">
              <h1 className="lobster text-right display-4">Accessories</h1>
            </Link>
          </div>
          <div className="col-lg-2 col-md-4">
            <h5 className="bold">BY TYPES</h5>
            <div className="w-75 border-top pb-2 mt-2" />
            {this.renderList(data.navbar.accessories.byType, ...Object.values(FILTER_ACCESSORIES_SELECTIONS))}
          </div>
          <div className="col-lg-7 col-md-8">
            <div className="row">
              <div className="col-4">
                <Link to={"/accessories/" + item1.tag}>
                  <img src={item1.imgURL} alt="" className="img-fluid popup-nav-img" />
                </Link>
              </div>
              <div className="col-4">
                <Link to={"/accessories/" + item2.tag}>
                  <img src={item2.imgURL} alt="" className="img-fluid popup-nav-img" />
                </Link>
              </div>
              <div className="col-4">
                <Link to={"/accessories/" + item3.tag}>
                  <img src={item3.imgURL} alt="" className="img-fluid popup-nav-img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderList(list, ...category) {
    return list.map((d, i) => {
      let filterType = this.props.popupType === "shoes" ? FILTER_SHOES : FILTER_ACCESSORIES;

      return (
        <li
          key={i}
          className="popup-nav-link my-1 open-sans"
          onClick={() => this.handleClickNavItems(
            this.props.popupType, {
              type: filterType,
              selectedFilter: category[i]
            })}
        >
          {d}
        </li>
      );
    });
  }

  render() {
    return (
      <div
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        className={`popup-nav-container animated faster ${this.props.animatedStyle}`}
      >
        {this.props.popupType === "shoes" ? this.renderPopupShoe() : this.renderPopupAccessories()}
      </div>
    );
  }
}

export default withRouter(connect(null, { filterProducts })(PopupNavBar));
