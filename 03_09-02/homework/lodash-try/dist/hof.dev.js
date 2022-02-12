"use strict";

var _ = require('lodash');

var fruits = {
  cherry: 'cherry',
  exotic: {
    mango: 'mango'
  }
};

var cloneFruits = _.cloneDeep(fruits);

console.log(cloneFruits); // { cherry: 'cherry', exotic: { mango: 'mango' } }