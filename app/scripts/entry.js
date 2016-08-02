import React from 'react';
import { Router, hashHistory, Route } from 'react-router';
import ReactDOM from 'react-dom';
import DocumentReader from './components/document';
import Modal from './components/modal';
import store from './store';
// import Nav from './components/nav';
// import SingleDoc from './components/documentsingle';

const App = React.createClass({
  render: function () {
    // console.log(store.docsCollection.get[i].userRead);
    return (
      <div className="main-content">
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


// <Nav />
// <Route path="/:id" component={SingleDoc}/>
// <Route path="/:id" component={DocumentReader}/>
