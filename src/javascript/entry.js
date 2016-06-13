import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import greeter from './greeter/reducer';
import App from './App';

const store = createStore(combineReducers({
  greeter,
  routing: routerReducer,
}));

const history = syncHistoryWithStore(browserHistory, store);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/(:name)" component={App} />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});
