import React from 'react';
import store from '../store';
import { Link, hashHistory } from 'react-router';

const Modal = React.createClass({
  confirmHandler: function () {
    console.log('You have read this!');
    store.doc.set('userRead', true);
    hashHistory.push('/');
  },

  render: function () {
    return (
    <div className="modal-container">
      <div className="modal-content">
      <span>Are you sure you want to mark as read?</span>
      <input className="confirmBtn" onClick={this.confirmHandler} type="button" value="confirm"/>
      <Link className="cancelBtn" to="/">cancel</Link>
      </div>
    </div>
    )
  }
});

export default Modal;
