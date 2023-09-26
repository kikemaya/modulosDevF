// Herencia de objetos
function Animal(nombre) {
  this.nombre = nombre
}

Animal.prototype.saludar = function () {
  console.log(`Hola, soy un animal llamado ${this.nombre}`);
}

function Perro(nombre, raza) {
  Animal.call(this, nombre);
  this.raza = raza
}

Perro.prototype = Object.create(Animal.prototype)
Perro.prototype.constructor = Perro

const miPerro = new Perro("Fideo", "Labrador")
miPerro.saludar()