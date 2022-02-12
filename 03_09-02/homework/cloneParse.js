function cloneDeep(obj) {
  if (typeof obj !== 'object' || typeof obj === null) {
    return obj
  }

  return JSON.parse(JSON.stringify(obj))
}

const object = { a: 'first', b: { c: 'second', d: 'third' } }
const clone = cloneDeep(object)

console.log(clone);

console.log(
  object == clone  // false
);
