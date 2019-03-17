import React, { Component } from 'react';
import { connect } from 'react-redux';
import {} from '../../actions';

class CartItems extends Component {
  render() {
    console.log(this.props.state.UserReducers);
    return (
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-sm-8">
            <h1> Card Items</h1>
          </div>
          <div className="col-sm-4">
            <h1> Card Items</h1>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, {

})(CartItems);
