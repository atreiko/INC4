"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = void 0;

/**
 * Task description: Write a method that makes a shallow check is object empty
 * Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
 * Empty values: '', null, NaN, undefined
 * Task complexity: 2 of 5
 * @param {Object} object - Object with values of primitive data types
 * @returns {boolean}
 */
var isEmpty = function isEmpty(object) {
  var objectKeys = Object.keys(object);
  return !objectKeys.filter(function (key) {
    return object[key] || object[key] === 0 || object[key] === false;
  }).length;
};

exports.isEmpty = isEmpty;
var _1 = {
  s: 1,
  d: 2,
  k: 3,
  e: undefined,
  q: null,
  t: NaN
};
var _2 = {};
console.log(isEmpty(_2), isEmpty(_1));