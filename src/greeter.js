export default class Greeter {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}!`;
  }
}
