// Когда внутренняя функция начинает выполняться, начинается поиск переменной count++ изнутри-наружу
// Для каждого вызова makeCounter() создаётся новое лексическое окружение функции, со своим собственным count

// Когда скрипт только начинакт выплняться - есть только глобальное лексическое окружение
// Потом есть function Declaration, которая еще вызывалась и создана в глобальном лексическом окружении
// Все функции «при рождении» получают скрытое свойство [[Environment]], 
// которое ссылается на лексическое окружение места, где они были созданы.
// Таким образом, функция понимает где она была создана.

// let count = 4;

function makeCounter() {
  let count = 0;

  return function() {
    return count++; // есть доступ к внешней переменной "count"
  };
}

let counter = makeCounter();


console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3

let counter_2 = makeCounter()

console.log(counter_2()) // 1
console.log(counter_2()) // 2
