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
    let searchPath = "";
    let namePath = this.props.history.location.pathname.split('/');

    // Check if from search page
    if (namePath[1] === "search") {
      searchPath = namePath[1] + this.props.history.location.search;
      namePath[1] += ` results for '${this.props.history.location.search.slice(2)}'`;
    }
    
    namePath[0] = "Home";
    if (namePath.length >= 3) {
      try {
        productPath = namePath[2];
        namePath[2] = this.state.data[namePath[2]].name;
      }
      catch {
        return <Redirect to={`/${namePath[1]}`}/>;
      }
    }

    namePath = namePath.map(item => item.charAt(0).toUpperCase() + item.slice(1));
    
    // Prepare string link
    const linksPath = namePath.map((item) => {
      if (item === "Home") {
        return "/";
      } else if (item === "Shoes" || item === "Accessories") {
        return "/" + item.toLowerCase();
      } else if (item.startsWith("Search")) {
        return "/" + searchPath;
      } else {
        return "/" + productPath;
      }
    });
    
    if (namePath.length >= 3) {
      linksPath[2] = linksPath[1] + linksPath[2];
    }

    return namePath.map((path, i) => {
      return (i === namePath.length - 1) ? (
        <Link key={i} to={linksPath[i]}>
          <p className="bold mb-1">{path}</p>
        </Link>
      ) : (
        <Link  key={i} to={linksPath[i]}>
          <p className="text-muted mb-0">{path} /&nbsp;</p>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="products-path">
        <div className="container">
          <div className="row px-1 pt-3 pb-1">
            {this.renderPath()}
          </div>
        </div>
      </div>
    );
  }
}
