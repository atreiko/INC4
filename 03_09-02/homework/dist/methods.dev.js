"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var obj = {
  name: 'Artem',
  age: 29,
  desc: {
    married: false,
    kids: false,
    job: true
  },
  skills: ['HTML5', 'CSS', 'JS', 'React']
};
var a = {
  a: 1
};
var b = {
  b: 2
};
var c = {
  c: 3
}; //todo CREATE and COPY :
//! ========================================================================

console.group('Object.assign'); // create new property on obj

var copyWithOjectAssign = Object.assign({}, obj, {
  "new": 'prop'
});
console.log(copyWithOjectAssign); //* ========================================================================
//change property:

Object.assign(copyWithOjectAssign, {
  "new": 'changed prop'
});
console.log(copyWithOjectAssign); //* ========================================================================

var copyWithOjectAssign2 = Object.assign(a, b, c);
console.log(copyWithOjectAssign2); // { a: 1, b: 2, c: 3 } 

var createWithObjectAssign = Object.assign({
  name: 'Artem',
  age: 29,
  desc: {
    married: false,
    kids: false,
    job: true
  },
  skills: ['HTML5', 'CSS', 'JS', 'React']
});
console.log(createWithObjectAssign);
console.groupEnd(); //todo copy with SPREAD 
//! ========================================================================

var newPerson = _objectSpread({}, obj, {
  prop: 'unique'
});

console.log(newPerson); // copied obj and added new property ---> prop: 'unique'
//! ========================================================================
//todo  Object.keys

console.log(Object.keys(obj)); // [ 'name', 'age', 'desc', 'skills' ]
//todo  Object.values

console.log(Object.values(obj)); // [ 
//   'Artem',
//   29,
//   { married: false, kids: false, job: true },
//   [ 'HTML5', 'CSS', 'JS', 'React' ] 
// ]
//todo  Object.entries

console.log(Object.entries(obj)); // [ 
//   [ 'name', 'Artem' ],
//   [ 'age', 29 ],
//   [ 'desc', { married: false, kids: false, job: true } ],
//   [ 'skills', [ 'HTML5', 'CSS', 'JS', 'React' ] ] 
// ]