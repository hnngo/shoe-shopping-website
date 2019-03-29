import React, { Component } from 'react';
import ProductsView from './ProductsView';
import { imgURL } from '../../data.json';

export default class ProductsRecommend extends Component {
  constructor(props) {
    super(props);

    const data = {
      shoes: [],
      accessories: [],
    }

    for (let key in imgURL.products) {
      for (let keyInside in imgURL.products[key]) {
        for (let keyInsideTag in imgURL.products[key][keyInside]) {
          const productsTag = imgURL.products[key][keyInside][keyInsideTag].tag;
          data[productsTag] = imgURL.products[key][keyInside][keyInsideTag];
          data[key].push(productsTag);
        }
      }
    }

    this.state = { data };
  }

  renderProductsPath = (tag) => {
    if (this.state.data.shoes.includes(tag)) {
      return "/shoes/" + tag;
    } else if (this.state.data.accessories.includes(tag)) {
      return "/accessories/" + tag;
    }
  }

  renderRecommendedItems() {
    let number = this.props.number;
    const resRender = [];
    let prevRandom = [];
    
    while (number > 0) {
      let randomIndex = Math.floor(Math.random() * this.state.data[this.props.category].length);
      let item = this.state.data[this.state.data[this.props.category][randomIndex]]

      if (this.state.data) {
        if (item.tag !== this.props.itemInfo.tag && !prevRandom.includes(randomIndex)) {
          prevRandom.push(randomIndex);
          number -= 1;
          resRender.push(
            <ProductsView
              optionImgClass={this.props.optionImgClass || ""}
              key={number}
              itemLink={this.renderProductsPath(item.tag)}
              item={item}
            />
          )
        }
      }
    }
    console.log(resRender);
    return resRender;
  }

  render() {
    return (
      <div className="container my-4">
        {this.props.lineSeparate ? <div className="w-100 border-top mb-3"></div> : <div/>}
        <h5 className="monteserrat">People Who Viewed This Item Also Viewed</h5>
        <div className="row">
          {this.renderRecommendedItems()}
        </div>
      </div>
    );
  }
}
