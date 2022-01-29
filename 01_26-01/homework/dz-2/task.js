// 1. Есть строка ‘’https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/' - 
// вытянуть из этой строки домен, вытянуть название статьи, убрать дефис и каждое 
// слово сделать с заглавной буквы


const str = 'https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/';

const domain = str.slice(8, 16)
const path = str.slice(17, -1)

const splitString = path.split('').map(symbol => {
  return symbol.replace('-', ' ')
})

const title = splitString
  .join('')
  .split(' ')
  .map(elem  => elem[0].toUpperCase() + elem.slice(1, elem.length)).join(' ')

console.log(title);

//* What Can Cedefi Bring To The Crypto Industry





