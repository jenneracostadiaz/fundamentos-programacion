class Carro {
  constructor(marca, tipo, puertas) {
    this.marca = marca;
    this.tipo = tipo;
    this.puertas = puertas;
    this.creadoEn = "hoy";
    this.encendido = false;
    this.gasolina = 100;
  }
  encenderCarro() {
    if (this.encendido) {
      console.error(
        "El Carro está encendido, ya no se puede volver  a encender"
      );
    } else {
      this.encendido = true;
      console.log("El Carro está encendido");
    }
    return this;
  }
  realizarViaje(consumo) {
    if (!this.encendido) return console.log("Carro Apagado");

    if (consumo >= this.gasolina)
      return console.error(
        "No puede realizar un viaje mayor a " + this.gasolina
      );

    this.gasolina = this.gasolina - consumo;
    return "Le queda " + this.gasolina;
  }
}

let carro = new Carro("Mazda", "Sedan", 2);
console.log(carro);
