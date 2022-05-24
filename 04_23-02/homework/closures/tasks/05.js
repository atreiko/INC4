
const foo = (num) => {
  return () => {
    return num / 2
  }
}

const foo2 = () => num => num

for (let i = 0; i < 100; i++) {
  if (i !== 0 && i % 4 === 0) {
    let newNum = foo(i)
    console.log(newNum())
  }
}