"use strict";

// let count = 4
function counter() {
  var count = 0;
  return count += 1;
}

console.log(counter(), counter(), counter(), counter(), counter());