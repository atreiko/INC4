

const auto = {
  brand: 'Tesla',
  model: 'ModelX',
  // details: {
  //   color: 'Red',
  //   year: 2021,
  //   atStock: true
  // }
  // drive() {
  //   console.log(`rrrrrrrr`);
  // }
}

const cars = [ auto ]

//? :
cars.forEach(car => {
  console.log(
    `${car.brand} ${car.details && car.details.year}: color - ${car.details && car.details.color}`
  );
})
// Tesla undefined: color - undefined 

//todo :
cars.forEach(car => {
  console.log(
    `${car.brand} ${car.details?.year}: color - ${cars.details?.color}`
  );
})
// Tesla undefined: color - undefined

//todo with object methods :
auto.drive?.()

