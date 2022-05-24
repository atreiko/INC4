// * uncomment global variable and comment local to get the result: 5, 6, 7, 8, 9
let count = 4

function counter() {
  // * comment local variable and uncomment global to get the result: 1, 1, 1, 1
  // let count = 0;
    return count += 1 
}

console.log(
  counter(),
  counter(),
  counter(),
  counter(),
  counter(),
)


