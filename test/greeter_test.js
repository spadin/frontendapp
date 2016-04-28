import test from 'ava';
import Greeter from '../src/greeter';

test('#greet', (t) => {
  const greeter = new Greeter('Sam');
  t.is(greeter.greet(), 'Hello Sam!');
});
