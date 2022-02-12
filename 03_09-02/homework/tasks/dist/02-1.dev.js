"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var makePairs = function makePairs(obj) {
  var isObject = function isObject(val) {
    val && _typeof(val) === 'object' && !Array.isArray(val);
  };

  var addDelimiter = function addDelimiter(a, b) {
    return a ? "[".concat(a, ", ").concat(b, "]") : b;
  };

  var entries = Object.entries(obj);
  var newEntries = [];
  entries.forEach(function (element) {
    if (isObject(element) && typeof element !== 'number') {
      element;
    }

    entries.forEach(function (element) {
      if (isObject(element)) {
        for (var key in element) {
          Object.entries(element[key]);
        }
      }
    });
    console.log(element);
  });
  return entries;
};

var fruits = {
  a: 1,
  local: {
    apples: 5,
    pears: 3
  },
  exotic: {
    mango: 2,
    'dragon-fruit': 1
  }
};
console.log(makePairs(fruits));