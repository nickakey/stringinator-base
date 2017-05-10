const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toEqual(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(10)).toEqual(10);
  });

  it('returns the same array if given an array', () => {
    expect(_.identity(['georgia', 99, true])).toEqual(['georgia', 99, true]);
  });

  it('returns the same object if given an object', () => {
    expect(_.identity({name: 'nick', hair: 'reddish'})).toEqual({name: 'nick', hair: 'reddish'});
  });
});


/* 

WHATS THE DIFFERENE BETWEEN .toEqual and the other JEST 
testing term?

*/