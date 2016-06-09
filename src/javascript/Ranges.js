export const GT  = 'greater-than',
             LT  = 'less-than',
             GTE = 'greater-than-or-equal-to',
             LTE = 'less-than-or-equal-to'

const compare = (target, {point, comparison}) => {
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

export const gt  = (point) => ({comparison: GT,  point});
export const lt  = (point) => ({comparison: LT,  point});
export const gte = (point) => ({comparison: GTE, point});
export const lte = (point) => ({comparison: LTE, point});
