import React, { PropTypes } from 'react';
import Greeter from './greeter/Greeter';

const App = ({ params: { name } }) => (
  <Greeter name={name} />
);

App.propTypes = {
  params: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default App;
