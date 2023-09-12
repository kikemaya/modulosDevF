// Desestructuración de objetos como parámetros de funciones:

function imprimirInfo({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const usuario = {
  nombre: 'Pedro',
  edad: 28
};

imprimirInfo(usuario); // Resultado: 'Nombre: Pedro, Edad: 28'

// En este caso, estamos pasando un objeto como argumento a la función imprimirInfo, y luego desestructuramos el objeto directamente en los parámetros de la función para acceder a las propiedades dentro de la función.

// La desestructuración de objetos es una característica poderosa de JavaScript que simplifica la manipulación de datos en objetos.