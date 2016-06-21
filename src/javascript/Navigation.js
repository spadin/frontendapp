import React from 'react';
import { Link } from 'react-router';

const activeStyle = {
  color: 'red',
};

const Navigation = () => (
  <div>
    <Link activeStyle={activeStyle} to="/" onlyActiveOnIndex>Home</Link>
    <Link activeStyle={activeStyle} to="/Sandro">Sandro</Link>
  </div>
);

export default Navigation;
