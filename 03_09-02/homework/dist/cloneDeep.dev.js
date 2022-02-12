"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function cloneDeep(obj) {
  var pull = new Map();
  var clone = cloneDeepMaster(obj);
  pull.clear();
  return clone;

  function cloneDeepMaster(obj) {
    if (_typeof(obj) !== 'object' || obj === null) {
      return obj;
    }

    if (obj instanceof Array) {
      var _clone = [];
      pull.set(obj, _clone);

      for (var i = 0; i < obj.length; i++) {
        if (pull.has(obj[i])) {
          _clone.push(pull.get(obj[i]));
        } else {
          _clone.push(cloneDeepMaster(obj[i]));
        }
      }

      return _clone;
    } else {
      var _clone2 = {};
      pull.set(obj, _clone2);

      for (var key in obj) {
        if (pull.has(obj[key])) {
          _clone2[key] = pull.get(obj[key]);
        } else {
          _clone2[key] = cloneDeepMaster(obj[key]);
        }
      }

      return _clone2;
    }
  }
}

var object = {
  name: 'Leonardo',
  prop: {
    weapon: 'swords'
  }
};
var clone = cloneDeep(object);
console.log(clone);