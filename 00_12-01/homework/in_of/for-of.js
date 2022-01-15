console.log('for...of TEST');


const arr = [1, 2, 3, 4, 5]

console.group()
console.log('ARRAY KEYS:');

for (const iterator of arr) {
  console.log(iterator);
}
// 1
// 2
// 3
// 4
// 5
console.groupEnd();

const obj = {
  '0' : 'first',
  '1' : 'second',
  '2' : 'third',
}

console.group()
console.log('OBJECT IS NOT ITERABLE:');
console.groupEnd()