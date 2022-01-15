console.log('for...in TEST');


const arr = [1, 2, 3, 4, 5]

console.group()
console.log('ARRAY KEYS:');
for (const key in arr) {
  console.log('key -> ', key);
}
// key ->  0
// key ->  1
// key ->  2
// key ->  3
// key ->  4
console.groupEnd()


const obj = {
  '0' : 'first',
  '1' : 'second',
  '2' : 'third',
}

console.group()
console.log('OBJECT KEYS');
setTimeout(() => {
  for (const key in obj) {
    console.log('key -> ', key);
  }
}, 500)
// key ->  0
// key ->  1
// key ->  2
console.groupEnd()


