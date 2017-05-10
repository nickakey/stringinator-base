const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    expect(_.reject([2, 4, 5, 6, 7, 8, 10, 11], (element) => {return (element % 2 === 1)})).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {  
    expect(_.reject({
      value1: null,
      value2: 'string',
      value3: null,
      value4 : 34
    }, (element) => {
      return (element === null)
    })).toEqual(['string', 34]);  
  });
});