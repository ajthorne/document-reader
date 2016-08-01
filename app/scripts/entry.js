import React from 'react';
import { Router, hashHistory, Route } from 'react-router';
import ReactDOM from 'react-dom';
import DocumentReader from './components/document';
import Modal from './components/modal';

const App = React.createClass({
  render: function () {
    return (
      <div className="main-content">
      <h2>Your Document</h2>
      <DocumentReader />
      {this.props.children}
      </div>
    )
  }
});

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path="/confirm" component={Modal}/>
      </Route>
  </Router>
)

ReactDOM.render(router, document.querySelector('.container'));
