const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    expect(_.uniq([5,5,4,6,9,4,5])).toEqual([5,4,6,9]);
  });
});