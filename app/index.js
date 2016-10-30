import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import Home from './home';
import Dashboard from './dashboard';

import SignUp from './components/signup';

if (module.hot) module.hot.accept();

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/dashboard" component={Dashboard}/>
  </Route>
);

class Root extends React.Component {
  render() {
    return <Router history={browserHistory} routes={routes} />
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
