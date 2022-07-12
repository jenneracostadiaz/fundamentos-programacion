let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5, 50];
let mayor = -1;

for (i = 0; i < numeros.length; i++) {
  if (numeros[i] >= mayor) {
    mayor = numeros[i];
  }
}

console.log("El numero mayor es: " + mayor);
