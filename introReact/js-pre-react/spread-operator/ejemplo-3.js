// Copiar propiedades de un objeto a otro:

// Puedes usar el operador de propagación para copiar propiedades de un objeto en otro.

const objeto1 = { a: 1, b: 2 };
const objeto2 = { ...objeto1, c: 3 };

console.log(objeto2); // Salida: { a: 1, b: 2, c: 3 }
