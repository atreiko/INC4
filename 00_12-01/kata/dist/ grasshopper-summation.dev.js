"use strict";

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
var summation = function summation(number) {
  var array = [];

  for (var i = 0; i <= number; i++) {
    array.push(i);
  }

  var result = array.reduce(function (acc, number) {
    return acc += number;
  }, 0);
  return result;
};

console.log(summation(8));