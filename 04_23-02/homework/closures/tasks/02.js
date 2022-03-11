/**
 * 
 * @param {Number} number 
 * @returns {Number}
 */

function incrementor(number) {
  return function(innerNumber) {
    return number + innerNumber
  }
}

//* Замыкаем еденицу в функции
const addOne = incrementor(1)
console.log(
  addOne(1),  // 2
  addOne(10)  // 11
);

//* Замыкаем десять в функции
const addTen = incrementor(10)
console.log(
  addTen(1),  // 11
  addTen(10)  // 20
);