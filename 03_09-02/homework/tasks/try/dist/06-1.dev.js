"use strict";

// at: ƒ at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// findLast: ƒ findLast()
// findLastIndex: ƒ findLastIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
// [[Prototype]]: Object
console.dir(Array.prototype);

var invoke = function invoke(object, path, func, args) {
  var splittedPath = path.split('.');
  var target = splittedPath.reduce(function (acc, key) {
    acc = acc[key] ? acc[key] : object[key];
    return acc;
  }, {});
  return Array.prototype[func].apply(target, args);
};

var obj = {
  a: {
    b: [1, 2, 3]
  }
}; // console.log(
//   invoke(obj)
// );

var sp = 'a.b'.split('.'); // [ 'a', 'b' ]

var tg = sp.reduce(function (acc, key) {
  acc = acc[key] ? acc[key] : obj[key];
  return acc;
}, {}); // [1, 2, 3]

console.log(tg);