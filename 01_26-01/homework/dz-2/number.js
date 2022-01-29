/**
 * Number 
 * methods
 */

// =================================================================


const num = 314159
const PI = Math.PI
const numStr = '3.141'

/**
* 1
* Number.isNaN()
* Number.isNaN(value)
* oпределяет, является ли переданное значение NaN
*/
console.group('isNaN')
console.log(Number.isNaN(num));             //* false
console.groupEnd()


/**
* 2
* Number.isFinite()
* Number.isFinite(testValue)
* определяет, является ли переданное значение конечным числом.
*/
console.group('isFinite')
console.log(Number.isFinite(num));          //* true
console.groupEnd()


/**
* 3
* Number.isSafeInteger()
* Number.isSafeInteger(testValue)
* определяет, является ли переданное значение безопасным целым числом.
*/
console.group('isSafeInteger')
console.log(Number.isSafeInteger(Math.pow(2, 53)));   //* false
console.groupEnd()


/**
* 3
* Number.isSafeInteger()
* Number.isSafeInteger(testValue)
* определяет, является ли переданное значение безопасным целым числом.
*/
console.group('isSafeInteger')
console.log(Number.isSafeInteger(Math.pow(2, 53)));   //* false
console.groupEnd()


/**
* 4
* Number.parseFloat()
* Number.parseFloat(string)
* разбирает строковый аргумент и возвращает число с плавающей запятой. Этот метод ведёт себя идентично глобальной функции parseFloat()
*/
console.group('parseFloat')
console.log(parseFloat('3.141string'));    //* 3.141
console.groupEnd()


/**
* 5
* Number.parseInt()
* Number.parseInt(string[, radix])
*  разбирает строковый аргумент и возвращает целое число. Этот метод ведёт себя идентично глобальной функции parseInt()
*/
console.group('parseInt')
console.log(parseInt(PI));    //* 3
console.groupEnd()


/**
* 6
* Number.prototype.toExponential()
* numObj.toExponential([fractionDigits]
* возвращает строку, представляющую объект Number в экспоненциальной записи.
*/
console.group('toExponential')
console.log(num.toExponential());     //* 3.14159e+5
console.groupEnd()


/**
* 7
* Number.prototype.toFixed()
* numObj.toFixed([digits])
* форматирует число, используя запись с фиксированной запятой.
*/
console.group('toFixed')
console.log(PI.toFixed(2));     //* 3.14
console.groupEnd()


/**
* 8
* Number.prototype.toLocaleString()
* numObj.toLocaleString([locales[, options]])
* возвращает строку с языкозависимым представлением числа.
*/
console.group('toLocaleString')
console.log(PI.toLocaleString('ar-EG'));     //* ٣٫١٤٢
console.groupEnd()


/**
* 9
* Number.prototype.toPrecision()
* numObj.toPrecision([precision])
* возвращает строку, представляющую объект Number с указанной точностью.
*/
console.group('toLocaleString')
console.log(PI.toLocaleString('ar-EG'));     //* ٣٫١٤٢
console.groupEnd()


/**
* 10
* Number.prototype.toString()
* numObj.toString([radix])
* возвращает строковое представление указанного объекта Number.
*/
console.group('toString')
const string = num.toString()
console.log(string);        //* 314159
console.log(typeof string); //* string       
console.groupEnd()

/**
* 11
* Number.prototype.valueOf()
* numObj.valueOf()
* возвращает примитивное значение объекта Number.
*/
console.group('toString')
const numObj = new Number(10);  //* Number {10}
console.log(numObj.valueOf());  //* 10
console.groupEnd()


// Properties =====================

console.dir(Number);
// EPSILON: 2.220446049250313e-16
// MAX_SAFE_INTEGER: 9007199254740991
// MAX_VALUE: 1.7976931348623157e+308
// MIN_SAFE_INTEGER: -9007199254740991
// MIN_VALUE: 5e-324
// NEGATIVE_INFINITY: -Infinity
// NaN: NaN
// POSITIVE_INFINITY: Infinity

