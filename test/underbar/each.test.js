const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
      const startsOffEmpty = [];
      const arrayOfNumbers = [1,2,3,4];
      const numberPusher = function(number, index, Array) {
        startsOffEmpty.push(`number - ${number} : index - ${index}`);
      };
      _.each(arrayOfNumbers, numberPusher);
      expect(startsOffEmpty).toEqual(['number - 1 : index - 0', 'number - 2 : index - 1', 'number - 3 : index - 2', 'number - 4 : index - 3'])
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
      const startsOffEmpty = [];
      const arrayLikeObj = {
        length: 3,
        1: 1,
        2: 2,
        3: 3
     };
      const numberPusher = function(number) {
        startsOffEmpty.push(number);
      };
      _.each(arrayLikeObj, numberPusher);
      expect(startsOffEmpty.length).toEqual(3)
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const startsOffEmpty = [];
    const objectOfNumbers = {num1: 1, num2: 2, num3: 3, num4: 4};
    const numberPusher = function(number, index, Array) {
      startsOffEmpty.push(`value - ${number} : key - ${index}`);
    };
    _.each(objectOfNumbers, numberPusher);
    expect(startsOffEmpty).toEqual(['value - 1 : key - num1', 'value - 2 : key - num2', 'value - 3 : key - num3', 'value - 4 : key - num4'])
  });
});

