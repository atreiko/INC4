const data = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4
  }
}

const makePairs = object => {
  const isObject = val => {
    val && typeof val === 'object' && !Array.isArray(val)
  }

  return 

}

console.log(
  makePairs(data)
);

const isObject = val => {
  val && typeof val === 'object' && !Array.isArray(val)
}

const func = obj => {
  for (let [key, value] of Object.entries(data)) {
    console.log(key, value);
    if (isObject(value)) {

      return Object.entries(value)
    }
  }
}

console.log(
  func(data)
)