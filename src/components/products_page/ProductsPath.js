import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { imgURL } from '../../data.json';

export default class ProductsPath extends Component {
  constructor(props) {
    super(props);

    // Set up item by tag name
    const dataTag = {};

    for (let key in imgURL.products) {
      for (let keyInside in imgURL.products[key]) {
        for (let keyInsideTag in imgURL.products[key][keyInside]) {
          const productsTag = imgURL.products[key][keyInside][keyInsideTag].tag;
          dataTag[productsTag] = imgURL.products[key][keyInside][keyInsideTag];
        }
      }
    }

    this.state = { data: dataTag };
  }

  renderPath() {
    // Prepare path name
    let productPath = "";
    let eachPath = this.props.history.location.pathname.split('/');

    eachPath[0] = "Home";
    if (eachPath.length >= 3) {
      try {
        productPath = this.state.data[eachPath[2]].tag;
        eachPath[2] = this.state.data[eachPath[2]].name;
      }
      catch {
        return <Redirect to={`/${eachPath[1]}`}/>;
      }
    }

    eachPath = eachPath.map(item => item.charAt(0).toUpperCase() + item.slice(1));
    // Prepare string link
    const linksPath = eachPath.map((item) => {
      if (item === "Home") {
        return "/";
      } else if (item === "Shoes" || item === "Accessories") {
        return "/" + item.toLowerCase();
      } else {
        return "/" + productPath;
      }
    });
    
    if (eachPath.length >= 3) {
      linksPath[2] = linksPath[1] + linksPath[2];
    }
    
    return eachPath.map((path, i) => {
      return (i === eachPath.length - 1) ? (
        <Link key={i} to={linksPath[i]}>
          <p className="bold">{path}</p>
        </Link>
      ) : (
        <Link  key={i} to={linksPath[i]}>
          <p className="text-muted">{path} /&nbsp;</p>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="products-path">
        <div className="container">
          <div className="d-flex px-1 pt-3">
            {this.renderPath()}
          </div>
        </div>
      </div>
    );
  }
}

//TODO: On small screen fix path 