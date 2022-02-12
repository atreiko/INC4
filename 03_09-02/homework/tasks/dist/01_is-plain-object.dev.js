"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Task description: Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * Task complexity: 1 of 5
 * @param element - element to verify
 * @returns {boolean}
 */
var isPlainObject = function isPlainObject(element) {
  if (_typeof(element) === 'object' && !Array.isArray(element) && element !== null) {
    return true;
  }
};

exports.isPlainObject = isPlainObject;
var fruits = {
  local: {
    apples: 5,
    pears: 3
  },
  exotic: {
    mango: 2,
    'dragon-fruit': 1
  }
};
console.log(isPlainObject(fruits)); // true