"use strict";

/**
 * 
 * @param {String} operator 
 * @returns {Number}
 */
function makeLazy(operator) {
  return function inner(firstNumber, secondNumber) {
    return eval("".concat(firstNumber, " ").concat(operator, " ").concat(secondNumber));
  };
}

var add = makeLazy('+');
var minus = makeLazy('-');
var divide = makeLazy('/');
var multiply = makeLazy('*');
var pow = makeLazy('**');
console.log(add(10, 2), minus(10, 2), divide(10, 2), multiply(10, 2), pow(10, 2)); //* ========================================

function makeLazy_2(operator) {
  function inner(firstNumber, secondNumber) {
    //! delete return
    return eval("".concat(firstNumber, " ").concat(operator, " ").concat(secondNumber));
  }

  return inner; //! add return 
}

var add_2 = makeLazy_2('+');
var minus_2 = makeLazy_2('-');
var divide_2 = makeLazy_2('/');
var multiply_2 = makeLazy_2('*');
var pow_2 = makeLazy_2('**');
console.log(add_2(10, 2), minus_2(10, 2), divide_2(10, 2), multiply_2(10, 2), pow_2(10, 2));