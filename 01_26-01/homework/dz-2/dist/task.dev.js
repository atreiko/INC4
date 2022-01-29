"use strict";

// 1. Есть строка ‘’https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/' - 
// вытянуть из этой строки домен, вытянуть название статьи, убрать дефис и каждое 
// слово сделать с заглавной буквы
var str = 'https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/';
var domain = str.slice(8, 16);
var path = str.slice(17, -1);
var splitString = path.split('').map(function (symbol) {
  return symbol.replace('-', ' ');
});
var title = splitString.join('').split(' ').map(function (elem) {
  return elem[0].toUpperCase() + elem.slice(1, elem.length);
}).join(' ');
console.log(title); //* What Can Cedefi Bring To The Crypto Industry