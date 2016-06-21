import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import greeter from './greeter/reducer';
import App from './App';
import GreeterPage from './GreeterPage';

const store = createStore(combineReducers({
  greeter,
  routing: routerReducer,
}));

const history = syncHistoryWithStore(browserHistory, store);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={GreeterPage} />
          <Route path="(:name)" component={GreeterPage} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});
