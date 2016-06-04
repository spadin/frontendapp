import ReactDOM from 'react-dom';
import React from 'react';
import Greeter from './greeter';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Greeter name="Sandro"/>,
    document.getElementById('root')
  );
});
