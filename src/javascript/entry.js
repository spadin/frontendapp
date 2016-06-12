import ReactDOM from 'react-dom';
import React from 'react';
import Greeter from './greeter/greeter';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import greeter from './greeter/reducer';

const reducer = combineReducers({ greeter });
const store = createStore(reducer);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Greeter name="Sandro" />
    </Provider>,
    document.getElementById('root')
  );
});
