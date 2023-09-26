// Definir una funcion constructora
function Persona(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
}

// Agregar un metodo al prototipo de persona
Persona.prototype.saludar = function () {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
}

// Crear una instancia de Persona
const juan = new Persona("Juan", 30)

// Llamar al metodo agregado al prototipo
juan.saludar()