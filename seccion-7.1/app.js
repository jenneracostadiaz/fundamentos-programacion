//kg = (lb / 2.2046)
let libras = 160;
let kg = libras / 2.2046;

kg *= 100;
kg = Math.round(kg);
kg /= 100;
console.log(kg);
