const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1,2,3,4,5])).toEqual(true);
  });

  it('returns true for an array-like object', () => {
    expect(_.isArrayLike({word: 'pizza', length: 10})).toEqual(true);
  });

  it('returns false for a non-array-like object', () => {
    expect(_.isArrayLike({word: 'pizza', height: '10'})).toEqual(false);
  });
});
