"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function cloneDeep(obj) {
  if (_typeof(obj) !== 'object' || typeof obj === null) {
    return obj;
  }

  return JSON.parse(JSON.stringify(obj));
}

var object = {
  a: 'first',
  b: {
    c: 'second',
    d: 'third'
  }
};
var clone = cloneDeep(object);
console.log(clone);
console.log(object == clone // false
);