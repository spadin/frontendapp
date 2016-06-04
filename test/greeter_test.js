import test from 'ava';
import Greeter from '../src/javascript/greeter';

test('#greet', (t) => {
  const greeter = new Greeter({name: 'Sam'});
  t.is(greeter.greet(), 'Hello Sam!');
});
