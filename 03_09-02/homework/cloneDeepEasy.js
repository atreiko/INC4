const deepClone = (obj) => {
  const clone = { ...obj }

  Object.entries(clone).forEach(([key, value]) => {
    clone[key] = typeof value === 'object' ? deepClone(value) : value
  })

  return clone
}

const fruits = { cherry: 'cherry', exotic: { mango: 'mango' } }
const cloneFruits = deepClone(fruits)

console.log(
  fruits.exotic === cloneFruits.exotic
);