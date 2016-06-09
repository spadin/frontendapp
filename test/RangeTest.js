import test from 'ava';
import Ranges, { gt, lt, gte, lte,
                 GT, LT, GTE, LTE } from '../src/javascript/Ranges';

test('add/find gt/lt', (t) => {
  const ranges = new Ranges();
  ranges.add(gt(0), lt(2), 'test-data');

  t.is(ranges.find(0), undefined);
  t.is(ranges.find(1), 'test-data');
  t.is(ranges.find(2), undefined);
});

test('add/find gte/lte', (t) => {
  const ranges = new Ranges();
  ranges.add(gte(0), lte(2), 'test-data');

  t.is(ranges.find(0), 'test-data');
  t.is(ranges.find(1), 'test-data');
  t.is(ranges.find(2), 'test-data');
  t.is(ranges.find(3), undefined);
});

test('add/find multiple entries', (t) => {
  const ranges = new Ranges();
  ranges.add(gte(0), lt(2),  'test-data-1');
  ranges.add(gte(2), lte(3), 'test-data-2');

  t.is(ranges.find(2), 'test-data-2');
  t.is(ranges.find(3), 'test-data-2');
});

test('gt', (t) => {
  t.deepEqual(gt(10), {comparison: GT, point: 10});
});

test('lt', (t) => {
  t.deepEqual(lt(10), {comparison: LT, point: 10});
});

test('gte', (t) => {
  t.deepEqual(gte(10), {comparison: GTE, point: 10});
});

test('lte', (t) => {
  t.deepEqual(lte(10), {comparison: LTE, point: 10});
});
