import React, { PropTypes } from 'react';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.currentTarget.value);
  }

  render() {
    return (
      <input type="text" onChange={this.handleChange} value={this.props.value} />
    );
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
