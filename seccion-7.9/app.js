function filtrarPorLetra(arr, letra) {
  let nuevoArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === letra) {
      nuevoArr.push(arr[i]);
    }
  }

  return nuevoArr;
}

let heroes = [
  "Doom",
  "Dr. Strange",
  "Hulk",
  "She Hulk",
  "Spiderman",
  "Captain Marvel",
];
let heroesCon = filtrarPorLetra(heroes, "S");
console.log(heroesCon); // She Hulk, Spiderman
