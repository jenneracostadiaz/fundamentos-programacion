let persona1 = {
  nombre: "Jenner",
  edad: 32,
};
let persona2 = {
  nombre: "Melissa",
  edad: 22,
};
let persona3 = {
  nombre: "Juan",
  edad: 16,
};

let personas = [persona1, persona2, persona3];

for (i = 0; i < personas.length; i++) {
  console.log(`${personas[i].nombre} -- ${personas[i].edad}`);
}
