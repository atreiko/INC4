"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePairs = void 0;

/**
 * Task description: Write a method that returns a deep array like [[key, value]]
 * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * Task complexity: 1 of 5
 * @param {Object} object - Any object to transform into array
 * @returns {Array} - a deep array
 */
var makePairs = function makePairs(object) {
  return Object.entries(object);
};

exports.makePairs = makePairs;
var data = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4
  }
};
console.log(makePairs(data));