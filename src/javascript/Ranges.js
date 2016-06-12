export const GT  = 'greater-than',
             LT  = 'less-than',
             GTE = 'greater-than-or-equal-to',
             LTE = 'less-than-or-equal-to';

const compare = (target, {comparison, point}) => {
  switch(comparison) {
    case GT:
      return target > point;
    case LT:
      return target < point;
    case GTE:
      return target >= point;
    case LTE:
      return target <= point;
  }
};

export default class Ranges {
  constructor() {
    this.ranges = [];
  }

  add(start, end, data) {
    this.ranges.push({start, end, data});
  }

  find(target) {
    const range = this.ranges.find((range) => {
      return compare(target, range.start) && compare(target, range.end);
    }) || {};
    return range.data;
  }
}

const createComparison = (comparison, point) => ({comparison, point});
export const gt  = (point) => (createComparison(GT,  point));
export const lt  = (point) => (createComparison(LT,  point));
export const gte = (point) => (createComparison(GTE, point));
export const lte = (point) => (createComparison(LTE, point));
