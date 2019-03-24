import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class SearchPage extends Component {
  render() {
    console.log(this.props)
    if (this.props.location.pathname.startsWith("/search")) {
      return (
        <div>
          <h1>Search Page</h1>
          <h3>{this.props.location.search}</h3>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = ({ FilterReducers }) => {
  return {
    searchKeys: FilterReducers.searchKeys
  }
};

export default connect(mapStateToProps)(SearchPage);
