// Alias para propiedades:

const persona = {
  nombreCompleto: 'Ana García',
  edad: 25
};

// Desestructuración con alias
const { nombreCompleto: nombre, edad } = persona;

console.log(nombre); // Resultado: 'Ana García'
console.log(edad);   // Resultado: 25

// En este caso, estamos utilizando alias para asignar el valor de la propiedad nombreCompleto a la variable nombre durante la desestructuración