

const makePairs = obj => {
  const isObject = val => {
    val && typeof val === 'object' && !Array.isArray(val);
  }

  const addDelimiter = (a, b) =>
  a ? `[${a}, ${b}]` : b;

  const entries = Object.entries(obj)
  const newEntries = []

  entries.forEach(element => {
    if (isObject(element) && typeof element !== 'number') {
      element
    }
    entries.forEach(element => {
      if (isObject(element)) {
        for (let key in element) {
          Object.entries(element[key])
        }
      }
    })

    console.log(element);
  })

  return entries

}

const fruits = {
  a: 1,
  local: {
    apples: 5,
    pears: 3,
  },
  exotic: {
    mango: 2,
    'dragon-fruit': 1
  }
}


console.log(
  makePairs(fruits)
);


