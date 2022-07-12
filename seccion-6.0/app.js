function describirPersona(p) {
  console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);
}

let persona = {
  nombre: "Jenner",
  edad: 31,
  estatura: 1.79,
};

describirPersona(persona);
