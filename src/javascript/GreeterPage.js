import React, { PropTypes } from 'react';
import Greeter from './greeter/Greeter';

const GreeterPage = ({ params: { name } }) => (
  <div>
    <Greeter name={name} />
  </div>
);

GreeterPage.propTypes = {
  params: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default GreeterPage;
