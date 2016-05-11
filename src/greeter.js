import { Component } from 'react';

export default class Greeter extends Component {
  constructor(props) {
    super(props);
  }

  greet() {
    return `Hello ${this.props.name}!`;
  }

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}
