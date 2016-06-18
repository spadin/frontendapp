import test from 'ava';
import greeting from '../../src/javascript/greeter/greeting';

test('returns Hello World! when no name is passed in', (t) => {
  t.is(greeting(), 'Hello World!');
});

test('returns Hello Sam! when Sam is passed in', (t) => {
  t.is(greeting('Sam'), 'Hello Sam!');
});
