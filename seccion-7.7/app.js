function max(a, b, c) {
  let numeros = [a, b, c];
  let mayor = 1;
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] >= mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}
let mayor = max(5, 2, 12);
console.log(mayor); // 6
