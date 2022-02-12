"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var makePairs = function makePairs(object) {
  var entries = null;

  if (_typeof(object) === 'object') {
    entries = Object.entries(object);
    entries.forEach(function (element) {
      if (_typeof(element) === 'object') {
        if (Array.isArray(element)) {
          element.forEach(function (el) {
            if (_typeof(el) === 'object') {
              for (var key in el) {
                console.log(el);
                return Object.entries(el);
              }
            }
          });
        }
      }
    });
  }

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
console.log(makePairs(fruits)); // if(Array.isArray(object)) {
//   object.forEach(element => {
//     if (typeof element === 'object' && !Array.isArray(object)) {
//       Object.entries(object)
//     }
//     return makePairs(element)
//   })
// }
// for (let key in object) {
//   if (typeof object[key] === 'object') {
//     return Object.entries(object[key])
//   }
//   Object.entries(object)
// }