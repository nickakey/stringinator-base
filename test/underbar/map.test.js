const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arrayOfNumbers = [1,2,3,4,5];
    const squareNumber = function(number) {
      return number * number;
    }
    const squaredArray = _.map(arrayOfNumbers, squareNumber);
    expect(squaredArray).toEqual([1,4,9,16,25]);
  });
});