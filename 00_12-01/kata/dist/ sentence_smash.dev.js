"use strict";

// Напишите функцию, которая берет массив слов, объединяет их в предложение и возвращает предложение. 
// Вы можете игнорировать необходимость очистки слов или добавления знаков препинания, но вы должны 
// добавлять пробелы между каждым словом. Будьте внимательны, не должно быть пробела ни в начале, ни в конце предложения!
// Пример
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
var arr = ['hello', 'world', 'this', 'is', 'great'];

var smash = function smash(words) {
  return words.join(' ');
};

console.log(smash(arr));