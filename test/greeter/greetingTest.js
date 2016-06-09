import test from 'ava';
import greeting from '../../src/javascript/greeter/greeting';

test('#greeting', (t) => {
  t.is(greeting('Sam'), 'Hello Sam!');
});
