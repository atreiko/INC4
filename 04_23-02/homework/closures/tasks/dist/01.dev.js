"use strict";

/**
 * 
 * @param {Number} number 
 * @returns {Number}
 */
function calcFunc(number) {
  return function () {
    return number * 1000;
  };
}

var calc = calcFunc(13);
console.log( // 13000
calc());