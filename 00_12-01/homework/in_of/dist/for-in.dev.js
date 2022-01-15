"use strict";

console.log('for...in TEST');
var arr = [1, 2, 3, 4, 5];
console.group();
console.log('ARRAY KEYS:');

for (var key in arr) {
  console.log('key -> ', key);
} // key ->  0
// key ->  1
// key ->  2
// key ->  3
// key ->  4


console.groupEnd();
var obj = {
  '0': 'first',
  '1': 'second',
  '2': 'third'
};
console.group();
console.log('OBJECT KEYS');
setTimeout(function () {
  for (var _key in obj) {
    console.log('key -> ', _key);
  }
}, 500); // key ->  0
// key ->  1
// key ->  2

console.groupEnd();