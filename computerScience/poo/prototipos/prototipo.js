// DEFINICION: JAVASCRIPT, ES UN LENGUAJE MULTIPARADIGMA,
// PRINCIPALMENTE ORIENTADO A OBJETOS Y BASADO EN PROTOTIPOS
function Animal(nombre, color) {
  this.nombre = nombre;
  this.color = color;
  this.sonidoAnimal = function sonidoAnimal() {
    return `Hola, estoy emitiendo el sonido de ${this.nombre}`
  };
};

// DEFINICION: UN OBJETO EN JS, ES LA INSTANCIA DE UN PROTOTIPO
const jirafa = new Animal("Jirafa", "Amarillo");
console.log(jirafa["nombre"]);
console.log(jirafa.color);
console.log(jirafa.sonidoAnimal());

const perro = new Animal("Perro", "Gris");
console.log(perro.sonidoAnimal());