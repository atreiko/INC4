// Преобразование типов данных
let answer = 42 
answer = 'hi'
console.log(answer);          //* hi

// Строка в число
let string = '56'
let a = Number(string)
let b = parseInt(string)
let c = +string

console.log(typeof a);


// Литералы массива
let arrA = ['Lion', ,'Monkey']
console.log(arrA.length);      //* 3

// Обратите внимание на то, что литерал массива является инициализатором объекта. 
// Чтобы получить более подробную информацию, прочитайте Использование инициализаторов объекта.


// Литералы объекта
const objA = {
  'first literal': 42,
  secondLiteral: '1'
}

objA['first literal'] //* 42
objA.secondLiteral    // *1


// RegExp
let re = /ab+c/


// Строковый литерал
let strA = 'string'
strA.length           //* 6
strA[1]               //* t


// throw  ---> 
// throw 'Error';
// throw 42;
// throw true
// throw { toString: function() { return `I'm an object`} }

