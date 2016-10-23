import {Router, Route, hashHistory } from 'react-router'
import SignUp from './components/signup'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/signup" component={SignUp}/>
  </Router>
), document.getElementById('root'))

