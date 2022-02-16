"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyDeep = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isEmptyDeep = function isEmptyDeep(element) {
  if (element === null) {
    return true;
  }

  if (Array.isArray(element)) {
    if (element.length === 0) {
      return true;
    }

    var result;

    for (var i = 0; i < element.length; i += 1) {
      if (typeof element[i] === 'boolean' || typeof element[i] === 'number' && !Number.isNaN(element[i]) || typeof element[i] === 'string' && element[i] !== '') {
        result = false;
        break;
      }

      if (Array.isArray(element[i]) || _typeof(element[i]) === 'object' && element[i] !== null) {
        result = isEmptyDeep(element[i]);
        break;
      }

      result = true;
    }

    return result;
  }

  if (_typeof(element) === 'object') {
    var objectKeys = Object.keys(element);

    if (objectKeys.length === 0) {
      return true;
    }

    var _result;

    for (var _i = 0; _i < objectKeys.length; _i += 1) {
      var value = element[objectKeys[_i]];

      if (typeof value === 'boolean' || typeof value === 'number' && !Number.isNaN(value) || typeof value === 'string' && value !== '') {
        _result = false;
        break;
      }

      if (Array.isArray(value) || _typeof(value) === 'object' && value !== null) {
        _result = isEmptyDeep(value);
        break;
      }

      _result = true;
    }

    return _result;
  }
};

exports.isEmptyDeep = isEmptyDeep;
var obj = {
  a: {
    b: undefined
  }
};
console.log(isEmptyDeep(obj));