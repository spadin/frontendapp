import React from 'react';

export default class Greeter extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: props.name,
    };
  }

  handleChange(event) {
    const name = event.currentTarget.value;
    this.setState({name})
  }

  greet() {
    if(this.state.name) {
      return `Hello ${this.state.name}!`;
    }
    else {
      return "Hello World!";
    }
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.name}/>
        <h1>{this.greet()}</h1>
      </div>
    );
  }
}
