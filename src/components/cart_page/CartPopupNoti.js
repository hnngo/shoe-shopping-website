import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { purCloseAddToCartModal } from '../../actions';

class CartPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.isSuccessfullyAdded}
          // contentLabel="onRequestClose Example"
          // onRequestClose={() => this.handleCloseModal()}
          ariaHideApp={false}
          className="Modal"
          overlayClassName="Overlay"
        >
          <p>Modal text!</p>
          <button onClick={() => this.props.purCloseAddToCartModal()}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = ({ UserReducers }) => {
  return {
    isSuccessfullyAdded: UserReducers.isSuccessfullyAdded
  }
}

export default connect(mapStateToProps, {
  purCloseAddToCartModal
})(CartPopup);
