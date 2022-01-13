"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Преобразование типов данных
var answer = 42;
answer = 'hi';
console.log(answer); //* hi
// Строка в число

var string = '56';
var a = Number(string);
var b = parseInt(string);
var c = +string;
console.log(_typeof(a)); // Литералы массива

var arrA = ['Lion',, 'Monkey'];
console.log(arrA.length); //* 3
// Обратите внимание на то, что литерал массива является инициализатором объекта. 
// Чтобы получить более подробную информацию, прочитайте Использование инициализаторов объекта.
// Литералы объекта

var objA = {
  'first literal': 42,
  secondLiteral: '1'
};
objA['first literal']; //* 42

objA.secondLiteral; // *1
// RegExp

var re = /ab+c/; // Строковый литерал

var strA = 'string';
strA.length; //* 6

strA[1]; //* t
// throw  ---> 
// throw 'Error';
// throw 42;
// throw true
// throw { toString: function() { return `I'm an object`} }