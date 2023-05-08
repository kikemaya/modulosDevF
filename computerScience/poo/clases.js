class Animal {
  constructor(nombre, edad, sonido, pulgas) {
    this.nombre = nombre;
    this.edad = edad;
    this.sonido = sonido;
    this.pulgas = pulgas;
  }
  hablar() {
    return `Este animal hace ${this.sonido}`;
  }
  saludar(persona) {
    return `${this.nombre} saluda a ${persona}`
  }
}

let perro = new Animal("Firulais", 11, "guau", true);
let gato = new Animal("Michifus", 5, "miau", false);

/* ESTE ES EL EJERCICIO
let calculadora = new Calculadora(6,7);
calculadora.sumar();
calculadora.restar();
calculadora.multiplicacion();
calculadora.dividir();
*/