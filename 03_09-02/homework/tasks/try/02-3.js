const data = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4
  }
}

const makePairs = (object) => {

  const entries = Object.entries(object)

  const todo = (entries) => {
    for (let key of entries) {
      console.log(key)
      for (let elem of key) {
        console.log(elem);
        if (typeof elem === 'object') {
          console.log(elem);
          return Object.entries(elem)
        }
      }
    }
  }
console.log(todo(entries));
  return todo(entries)
}

makePairs(data)
