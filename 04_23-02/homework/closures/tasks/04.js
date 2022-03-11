/**
 * 
 * @param {String} operator 
 * @returns {Number}
 */

function makeLazy(operator) {
  return function inner(firstNumber, secondNumber) {
    return eval(
      `${firstNumber} ${operator} ${secondNumber}`
    )
  }
}

const add      = makeLazy('+')
const minus    = makeLazy('-')
const divide   = makeLazy('/')
const multiply = makeLazy('*')
const pow      = makeLazy('**')

console.log(
  add(10, 2),
  minus(10, 2),
  divide(10, 2),
  multiply(10, 2),
  pow(10, 2),
)


//* ========================================


function makeLazy_2(operator) {
  function inner(firstNumber, secondNumber) {     //! delete return
    return eval(
      `${firstNumber} ${operator} ${secondNumber}`
    )
  }
  return inner  //! add return 
}

const add_2      = makeLazy_2('+')
const minus_2    = makeLazy_2('-')
const divide_2   = makeLazy_2('/')
const multiply_2 = makeLazy_2('*')
const pow_2      = makeLazy_2('**')

console.log(
  add_2(10, 2),
  minus_2(10, 2),
  divide_2(10, 2),
  multiply_2(10, 2),
  pow_2(10, 2),
)




