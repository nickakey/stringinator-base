const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    expect(_.some([4,4,4,3], (element) => {return (element % 2 !== 0)})).toEqual(true);
  });

  it('returns false if no number is odd', () => {
    expect(_.some([4,4,4], (element) => {return (element % 2 !== 0)})).toEqual(false);
  });

});