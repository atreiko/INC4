"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invoke = void 0;

/**
 * Task description: Write a method that invokes an array method on a specific path
 * Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * Task complexity: 3 of 5
 * @param {Object} object
 * @param {String} path - path in an object to property
 * @param {String} func - function to invoke
 * @param {Array} [args] - list of args
 * @returns {boolean}
 */
var invoke = function invoke(object, path, func, args) {
  var splittedPath = path.split('.');
  var target = splittedPath.reduce(function (acc, key) {
    acc = acc[key] ? acc[key] : object[key];
    return acc;
  }, {});
  return Array.prototype[func].apply(target, args);
};

exports.invoke = invoke;
var object = {
  a: {
    b: [1, 2, 3]
  },
  c: [4, 5, 6],
  d: {
    e: [7, 8, 9]
  }
};
var path = 'c';
var func = 'splice';
var args = [2, 3];
console.log(invoke(object, path, func, args));