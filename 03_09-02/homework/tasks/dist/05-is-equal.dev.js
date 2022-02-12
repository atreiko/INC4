"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEqual = void 0;

/**
 * Task description: Write a method that makes a shallow compare of two objects
 * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * Task complexity: 2 of 5
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {boolean}
 */
var isEqual = function isEqual(firstObj, secondObj) {
  var first = Object.keys(firstObj);
  var second = Object.keys(secondObj);

  if (first.length !== second.length) {
    return false;
  }

  for (var prop in first) {
    if (first.hasOwnProperty(prop) && first[prop] !== second[prop]) {
      return false;
    }
  }

  return true;
};

exports.isEqual = isEqual;
var _1 = {
  a: 1
};
var _2 = {
  a: 1
};
var _3 = {
  b: 1
};
console.log(isEqual(_1, _2), // true
isEqual(_1, _3) // false
);