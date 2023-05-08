class Animal {
  constructor(nombreRecibido, color) {
    this.nombre = nombreRecibido;
    this.color = color;
  };
  sonidoAnimal() {
    return `Estoy emitiendo el sonido de ${this.nombre}`;
  };
};

class Perro extends Animal {
  constructor(nombre, color, cantidadDePulgas, peludo) {
    super(nombre, color);
    this.cantidadDePulgas = cantidadDePulgas;
    this.peludo = peludo;
  };
  ladrar() {
    return "guau";
  };
};

class Gato extends Animal {
  constructor(nombre, color, raza){
    super(nombre,color);
    this.raza = raza;
  }
  maullar() {
    return "miau";
  }
}

const firulais = new Perro("Firulais", "cafe", "2", false);
const misifus = new Gato("Misifus", "azul", "angora");

/*
console.log(firulais.nombre);
console.log(firulais.sonidoAnimal());
console.log(firulais.ladrar());*/
