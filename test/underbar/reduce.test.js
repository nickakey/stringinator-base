const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const arrayOfNumbers = [5,5,5,5];
    expect(_.reduce(arrayOfNumbers, (accumulator, element) => {return accumulator + element}, 1)).toEqual(21);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const arrayOfNumbers = [5,5,5,5];
    expect(_.reduce(arrayOfNumbers, (accumulator, element) => {return accumulator + element})).toEqual(20);
  });

});