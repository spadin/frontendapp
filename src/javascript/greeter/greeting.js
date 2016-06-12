export default function greeting(name) {
  let greeting;

  if (name) {
    greeting = `Hello ${name}!`;
  } else {
    greeting = 'Hello World!';
  }

  return greeting;
}
