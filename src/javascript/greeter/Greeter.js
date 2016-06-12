import React, { PropTypes } from 'react';
import TextInput from './TextInput';
import greeting from './greeting';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateName } from './actions';

const Greeter = ({ name, updateName }) => (
  <div>
    <TextInput value={name} onChange={updateName} />
    <h1>{greeting(name)}</h1>
  </div>
);

Greeter.propTypes = {
  name: PropTypes.string,
  updateName: PropTypes.func,
};

const mapStateToProps = (state) => ({
  name: state.greeter.name,
});

const mapDispatchToProps = (dispatch) => (bindActionCreators({ updateName }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Greeter);
