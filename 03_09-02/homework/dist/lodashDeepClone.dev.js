"use strict";

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fruits = {
  cherry: 'cherry',
  exotic: {
    mango: 'mango'
  }
};
var cloneFruits = (0, _lodash["default"])(fruits);
console.log(fruits.exotic === cloneFruits.exotic);