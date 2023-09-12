// Valores por defecto:

const usuario = {
  nombre: 'María',
  edad: undefined
};

// Desestructuración con valores por defecto
const { nombre, edad = 30 } = usuario;

console.log(nombre); // Resultado: 'María'
console.log(edad);   // Resultado: 30 (valor por defecto)

// Hemos asignado un valor por defecto de 30 a la propiedad edad durante la desestructuración, por lo que si la propiedad no está definida en el objeto, se utilizará el valor por defecto