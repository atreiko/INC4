"use strict";

var person = Object.create({
  prop: 'test prototype',
  'second-prop': 'test prototype2'
}, {
  name: {
    value: 'Artem',
    enumerable: true,
    writable: true,
    configurable: true
  },
  birthYear: {
    value: 1992,
    enumerable: false,
    writable: false,
    configurable: false
  },
  age: {
    get: function get() {
      return new Date().getFullYear() - this.birthYear;
    },
    set: function set(value) {
      console.log('Set age', value);
    }
  }
}); //todo enumerable: true

for (var key in person) {
  console.log(key, person[key]);
} //  name: 'Artem'
//todo writable: true


person.name = 'Ivan';
console.log(person); // {name: 'Ivan', age: 29}
//todo configurable: true

delete person.name;
console.log(person); // {age: 29}
//todo getter

console.log(person.age); // 30
//todo setter

person.age = 31; // Set age 31
//todo hasOwnProperty

for (var _key in person) {
  if (person.hasOwnProperty(_key)) {
    console.log(person[_key]);
  }
} // ignore Prototype Properties
//todo defineProperty


o = new Object();
o.prop = 'alive';
console.log(o.hasOwnProperty('prop') // true 
);