import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';
import data from '../docCollection';

const DocumentReader = React.createClass({
  getInitialState: function () {
    return store.doc.toJSON();
  },

  componentDidMount: function() {
    store.doc.get();
    store.doc.on('change', () => {
        this.setState(store.doc.toJSON());
    })
  },

  checkHandler: function () {
    console.log('You checked me!');
    hashHistory.push('/confirm');
  },

  render: function () {
    console.log(this.state.userRead);

    let label;

    if (this.state.userRead) {
      label = <label><input checked={this.state.userRead} type="checkbox"/>Read</label>
    } else {
      label = <label><input checked={this.state.userRead} onChange={this.checkHandler} type="checkbox"/>Mark as Read</label>
    }

    return (
      <div className="main-view">
          <div className="textArea">
          <h2>{data[0].title}</h2>
          {data[0].text}
          </div>
          {label}
      </div>
    )
  }
});

export default DocumentReader;
