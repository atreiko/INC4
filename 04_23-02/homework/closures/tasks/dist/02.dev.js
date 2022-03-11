"use strict";

/**
 * 
 * @param {Number} number 
 * @returns {Number}
 */
function incrementor(number) {
  return function (innerNumber) {
    return number + innerNumber;
  };
} //* Замыкаем еденицу в функции


var addOne = incrementor(1);
console.log(addOne(1), // 2
addOne(10) // 11
); //* Замыкаем десять в функции

var addTen = incrementor(10);
console.log(addTen(1), // 11
addTen(10) // 20
);