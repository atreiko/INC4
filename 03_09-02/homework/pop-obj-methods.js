
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


//todo CREATE and COPY :
//! ========================================================================


console.group('Object.assign')

// create new property on obj
const copyWithOjectAssign = Object.assign({}, obj, {
  new: 'prop'
})
console.log(copyWithOjectAssign);

//* ========================================================================

//change property:
Object.assign(copyWithOjectAssign, {
  new: 'changed prop'
})
console.log(copyWithOjectAssign);

//* ========================================================================

const copyWithOjectAssign2 = Object.assign(a, b, c) 
console.log(copyWithOjectAssign2)
// { a: 1, b: 2, c: 3 } 


const createWithObjectAssign = Object.assign({
  name: 'Artem',
  age: 29,
  desc: {
    married: false,
    kids: false,
    job: true
  },
  skills: ['HTML5', 'CSS', 'JS', 'React']
})
console.log(createWithObjectAssign);

console.groupEnd()

//todo copy with SPREAD 
//! ========================================================================

const newPerson = {
  ...obj,
  prop: 'unique'
}

console.log(newPerson);
// copied obj and added new property ---> prop: 'unique'

//! ========================================================================


//todo  Object.keys
console.log(
  Object.keys(obj)
);
// [ 'name', 'age', 'desc', 'skills' ]


//todo  Object.values
console.log(
  Object.values(obj)
);
// [ 
//   'Artem',
//   29,
//   { married: false, kids: false, job: true },
//   [ 'HTML5', 'CSS', 'JS', 'React' ] 
// ]


//todo  Object.entries
console.log(
  Object.entries(obj)
);
// [ 
//   [ 'name', 'Artem' ],
//   [ 'age', 29 ],
//   [ 'desc', { married: false, kids: false, job: true } ],
//   [ 'skills', [ 'HTML5', 'CSS', 'JS', 'React' ] ] 
// ]


//todo  Object.freeze
Object.freeze(obj)
obj.name = 'Ivan'
obj.seal = true
console.log(
  obj.name,
  obj.seal
);
// 'Artem'
// undefined


//todo  Object.seal
const sealObj = { name: 'artem' }
Object.seal(sealObj)
sealObj.name = 'Ivan'
sealObj.seal = false
console.log(
  sealObj.name,
  sealObj.seal
);
// Ivan
// undefined


//todo  Object.is
const isObj = Object.assign(obj)
console.log(
  Object.is(obj, isObj)
);
// true


