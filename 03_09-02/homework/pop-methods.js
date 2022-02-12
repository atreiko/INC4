const obj = {
  name: 'Artem',
  age: 29,
  desc: {
    married: false,
    kids: false,
    job: true
  },
  skills: ['HTML5', 'CSS', 'JS', 'React']
}

const a = { a: 1 }
const b = { b: 2 }
const c = { c: 3 }

// todo Object.keys
const keys = Object.keys(obj)
console.log(
  keys          // [ 'name', 'age', 'desc', 'skills' ]
);

// todo Object.values
const values = Object.values(obj)
console.log(
  values
);
// [ 
//   'Artem',
//   29,
//   { married: false, kids: false, job: true },
//   [ 'HTML5', 'CSS', 'JS', 'React' ] 
// ]

// todo Object.entries
const entries = Object.entries(obj)
console.log(entries);
// [Array(2), Array(2), Array(2), Array(2)]

for (let [key, value] of entries) {
  console.log(
    `${key}: ${value}`
  );
}
// name: Artem
// age: 29
// desc: [object Object]
// skills: HTML5,CSS,JS,React

// todo Object.fromEntries
const entries_2 = new Map([
  ['foo', 'bar'],
  ['baz', 42]
])

const objFromEntries = Object.fromEntries(entries_2)
console.log(objFromEntries);
// { foo: 'bar', baz: 42 }
