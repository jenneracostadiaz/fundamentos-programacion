function masLargo(arr) {
  let nombreLargo;
  let mayor = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= mayor) {
      mayor = arr[i].length;
      nombreLargo = arr[i];
    }
  }
  return nombreLargo;
}
let heroes = ["Deadpool", "Ciclope", "Magneto", "Profesor Charles Xavier"];
let heroeLargo = masLargo(heroes);
console.log(heroeLargo); // Profesor Charles Xavier
