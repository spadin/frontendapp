import React from 'react';

export default class Greeter extends React.Component {
  constructor(props) {
    super(props);
  }

  greet() {
    if(this.props.name) {
      return `Hello ${this.props.name}!`;
    }
    else {
      return "Hello World!";
    }
  }

  render() {
    return (
      <h1>{this.greet()}</h1>
    );
  }
}
