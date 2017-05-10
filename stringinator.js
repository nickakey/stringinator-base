const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str.split(''), n).join('');
};

const last = function(str, n) {
  return _.last(str.split('').join(''), n);
};

const removeChar = function(str, target) {
  return _.reject(str.split(''), (element)=>{return element === target}).join('');
};

const hasChar = function(str, target) {
  return _.some(str.split('').join(''), (element)=>{return element === target});
};

const isOnlyDigits = function(str) {
  return _.every(str.split(''), (element)=>{return !isNaN(element)});
};

const filterToOnlyDigits = function(str) {
  return _.filter(str.split(''), (element)=>{return !isNaN(element)}).join('').trim();
};

const truncateString = function(val, maxLength) {
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  return _.map(obj, (element, key, obj)=>{
    return truncateString(element, maxLength);
  })
};

const countChars = function(str) {
  returnObject = {};
  _.each(str.split(''), (letter)=>{
    returnObject[letter] = null;
  });
  for(let key in returnObject) {
    returnObject[key] =  _.filter(str.split(''), (letter2)=>{
      return key === letter2;
    }).length;
  }
  return returnObject;
};

const dedup = function(str) {
  const letterCount = countChars(str);
  const returnArray = [];
  for(let key in letterCount) {
    returnArray.push(key);
    delete letterCount[key]; 
  }
  return returnArray.join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};