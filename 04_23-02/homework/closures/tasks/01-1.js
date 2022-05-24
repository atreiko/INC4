/**
 * @param {Number} number 
 * @returns {Function}
 */
function calcFunc(number) {
  return function() {
    return number * 1000
  }
}

const calc = calcFunc(13)
console.log( // 13000
  calc()
);





