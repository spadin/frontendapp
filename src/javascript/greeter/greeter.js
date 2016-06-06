import React from 'react';
import TextInput from './textInput';
import greeting from './greeting';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateName } from './actions';

const Greeter = ({name, updateName}) => (
  <div>
    <TextInput value={name} onChange={updateName}/>
    <h1>{greeting(name)}</h1>
  </div>
);

const mapStateToProps = (state) => ({
  name: state.greeter.name
});

const mapDispatchToProps = (dispatch) => ( bindActionCreators({updateName}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Greeter);
