// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  return val;
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  const returnArray = [];
  for(i = 0; i <= n - 1 && i <= array.length -1; i++) {
    returnArray.push(array[i]);
  }
  return returnArray;
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(Math.max(0, array.length - n));
}; 

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(array, target, fromIndex=0) {
  for(i = fromIndex; i <= array.length; i++) {
    if(array[i] === target) {
      return i;
    }
  } return -1;
};

const isArrayLike = function(obj) {
  return (typeof obj.length) === 'number' && obj.length > 0;
};

// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback=identity) {
  if(isArrayLike(obj)) {
    for(i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj);
      }
  } else {
    for(var key in obj) {
     callback(obj[key], key, obj)
    }
  }
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function(obj, callback=identity) {
  results = [];
  each(obj, (element) => {
    results.push(callback(element));
  });
  return results;
};

// Return an array of the values of a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  const returnArray = [];
  for(i = 0; i <= obj.length; i++) {
    for(let foundKey in obj[i]) {
      if(foundKey === key) {
        returnArray.push(obj[i][foundKey]);
      }
    }
  }
  return returnArray;
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).
const reduce = function(obj, callback=identity, initialValue=0) {
  var accumulator = initialValue;
  var initializing = accumulator === undefined;
  each(obj, (element, index, obj) => {
    if (initializing) {
      initializing = false;
      accumulator = element;
    } else {
       accumulator = callback(accumulator, element, index, obj);
    }
  });
  return accumulator;
};

// Return true if the object contains the target.
const contains = function(obj, target) {
  return reduce(obj, (accumulator, element) => {
    if(element === target) {
      return true
    } return accumulator;
  }, false);
};

// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback=identity) {
  return reduce(obj, (accumulator, element) => {
    if(!callback(element)) {
      return false;
    } 
    return accumulator;
  }, true);
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback=identity) {
  return reduce(obj, (accumulator, element) => {
    if(callback(element)) {
      return true;
    } return accumulator;
  }, false);
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback=identity) {
  return reduce(obj, (accumulator, element) => {
    if(callback(element)){ 
      accumulator.push(element)
    };
    return accumulator
  }, []);
};

// Return object without the elements / object valuesthat were rejected by the callback.
const reject = function(obj, callback=identity) {
  return reduce(obj, (accumulator, element) => {
    if(!callback(element)){ 
      accumulator.push(element)
    };
    return accumulator
  }, []);
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function(obj) {
  var foundInObj = {};
  return filter(obj, (element)=>{
    return !(element in foundInObj) && (foundInObj[element] = true);
  })
};


module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
