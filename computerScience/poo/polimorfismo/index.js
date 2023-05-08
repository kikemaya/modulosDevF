class Animal{
    constructor(nombre){
        this.nombre = nombre
    }
    hablar(){
        return `El sonido del animal`;
    }
}

class Perro extends Animal{
    constructor(nombre){
        super(nombre)   
    }
    hablar(){
        return `Guau`;
    }
}

class Gato extends Animal{
    constructor(nombre){
        super(nombre)   
    }
    hablar(){
        return `Miau`;
    }
}

class Perico extends Animal{
    constructor(nombre){
        super(nombre)   
    }
    hablar(){
        return `Kakaww`;
    }
}

let misifus = new Gato("Misifus");
let fido = new Perro("Fido");
