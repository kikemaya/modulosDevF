// Clonar un objeto y modificar propiedades:

// Puedes clonar un objeto existente y modificar sus propiedades en el proceso.

const persona = { nombre: "Juan", edad: 30 };
const personaModificada = { ...persona, edad: 31 };

console.log(personaModificada); // Salida: { nombre: "Juan", edad: 31 }
