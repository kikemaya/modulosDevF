// La desestructuración de objetos en JavaScript te permite extraer propiedades de un objeto y asignarlas a variables individuales de manera más conveniente.Aquí tienes cinco ejemplos de desestructuración de objetos:

// Desestructuración básica de propiedades:

const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

// Desestructuración
const { nombre, edad, ciudad } = persona;

console.log(nombre); // Resultado: 'Juan'
console.log(edad);   // Resultado: 30
console.log(ciudad); // Resultado: 'Madrid'