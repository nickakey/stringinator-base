const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    expect(_.indexOf([1,2,3,4,5], 1)).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    expect(_.indexOf([1,2,3,4,5], 5)).toBe(4);
  });

  it('returns -1 for a missing value', () => {
    expect(_.indexOf([1,2,3,4,5], 10)).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    expect(_.indexOf([1,2,3,4,5,2], 2)).toBe(1);
  });

  it('starts searching at the given offset', () => {
    expect(_.indexOf([1,2,3,4,5,2], 2, 2)).toBe(5);
  });

});