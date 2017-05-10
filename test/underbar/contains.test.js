const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const myArray = [1,2,3,4,5];
    expect(_.contains(myArray, 3)).toEqual(true);
  });

  it('returns false if an array does not contain the target', () => {
    const myArray = [1,2,3,4,5];
    expect(_.contains(myArray, 8)).toEqual(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const myObject = {num1: 1, num2: 2, num3: 3};
    expect(_.contains(myObject, 3)).toEqual(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const myObject = {num1: 1, num2: 2, num3: 3};
    expect(_.contains(myObject, 10)).toEqual(false);
  });

});