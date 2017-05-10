const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    expect(_.filter([4,4,9,4,3], (element) => {return (element % 2 !== 0)})).toEqual([9,3]);
  });

  // it('filters an object to only numeric values', () => {
  //   expect(_.filter([4, 'nick', 'pie', true, false, 10, 17], (element) => {return (typeof element === 'number')})).toEqual([4,10,17]);
  // });

  it('filters an object to only numeric values', () => {
    expect(_.filter({name: 'nick', age: 20, lifespan: 100}, (element) => {return (typeof element === 'number')})).toEqual([20, 100]);
  });
});