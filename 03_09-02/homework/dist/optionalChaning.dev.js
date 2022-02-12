"use strict";

var auto = {
  brand: 'Tesla',
  model: 'ModelX' // details: {
  //   color: 'Red',
  //   year: 2021,
  //   atStock: true
  // }

};
var cars = [auto];
cars.forEach(function (car) {
  console.log("".concat(car.brand, " ").concat(car.details && car.details.year, ": color - ").concat(car.details && car.details.color));
}); // Tesla undefined: color - undefined 

cars.forEach(function (car) {
  console.log("".concat(car.brand, " ").concat(car));
});