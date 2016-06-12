export const GT = 'greater-than';
export const LT = 'less-than';
export const GTE = 'greater-than-or-equal-to';
export const LTE = 'less-than-or-equal-to';

const compare = (target, { comparison, point }) => {
  let result;

  switch (comparison) {
    case GT:
      result = target > point;
      break;
    case LT:
      result = target < point;
      break;
    case GTE:
      result = target >= point;
      break;
    case LTE:
      result = target <= point;
      break;
    default:
      throw new Error('invalid comparison');
  }

  return result;
};

export default class Ranges {
  constructor() {
    this.ranges = [];
  }

  add(start, end, data) {
    this.ranges.push({ start, end, data });
  }

  find(target) {
    const range = this.ranges.find((range) => (
      compare(target, range.start) && compare(target, range.end)
    )) || {};
    return range.data;
  }
}

const createComparison = (comparison, point) => ({ comparison, point });
export const gt = (point) => (createComparison(GT, point));
export const lt = (point) => (createComparison(LT, point));
export const gte = (point) => (createComparison(GTE, point));
export const lte = (point) => (createComparison(LTE, point));
