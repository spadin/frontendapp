import React, { PropTypes } from 'react';
import Navigation from './Navigation';

const App = ({ children }) => (
  <div>
    <Navigation />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
