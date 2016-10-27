import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import HomePage from './pages/HomePage';

// Create an entry point for react
var entryPoint = document.createElement('div');
entryPoint.id = 'root';
document.body.appendChild(entryPoint);

class App extends React.Component {
  render() {
    return this.props.children;
  }
}

// Entry point render
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
    </Route>
  </Router>
), entryPoint);
