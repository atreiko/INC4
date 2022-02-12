"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
}; // todo Object.keys

var keys = Object.keys(obj);
console.log(keys // [ 'name', 'age', 'desc', 'skills' ]
); // todo Object.values

var values = Object.values(obj);
console.log(values); // [ 
//   'Artem',
//   29,
//   { married: false, kids: false, job: true },
//   [ 'HTML5', 'CSS', 'JS', 'React' ] 
// ]
// todo Object.entries

var entries = Object.entries(obj);
console.log(entries); // [Array(2), Array(2), Array(2), Array(2)]

for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
  var _entries$_i = _slicedToArray(_entries[_i], 2),
      key = _entries$_i[0],
      value = _entries$_i[1];

  console.log("".concat(key, ": ").concat(value));
} // name: Artem
// age: 29
// desc: [object Object]
// skills: HTML5,CSS,JS,React
// todo Object.fromEntries


var entries_2 = new Map([['foo', 'bar'], ['baz', 42]]);
var objFromEntries = Object.fromEntries(entries_2);
console.log(objFromEntries); // { foo: 'bar', baz: 42 }