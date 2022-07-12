function imprimirTabla(base, limite) {
  for (let i = 1; i <= limite; i++) {
    let resultado = base * i;
    console.log(base + " x " + i + " = " + resultado);
  }
}

imprimirTabla(2, 12);
