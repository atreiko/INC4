const _ = require('lodash')

const fruits = { cherry: 'cherry', exotic: { mango: 'mango' } }

const cloneFruits = _.cloneDeep(fruits)

console.log(cloneFruits);
// { cherry: 'cherry', exotic: { mango: 'mango' } }

