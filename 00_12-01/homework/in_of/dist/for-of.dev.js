"use strict";

console.log('for...of TEST');
var arr = [1, 2, 3, 4, 5];
console.group();
console.log('ARRAY KEYS:');

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var iterator = _arr[_i];
  console.log(iterator);
} // 1
// 2
// 3
// 4
// 5


console.groupEnd();
var obj = {
  '0': 'first',
  '1': 'second',
  '2': 'third'
};
console.group();
console.log('OBJECT IS NOT ITERABLE:');
console.groupEnd();