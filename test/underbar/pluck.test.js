const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const arrayOfObjects = [
      {name: 'nick', age: 21},
      {name: 'John', age: 33},
      {name: 'Sarah', age: 25},
      {name: 'Lucy', age: 80}
    ]
    expect(_.pluck(arrayOfObjects, 'age')).toEqual([21, 33, 25, 80]);
  });

});