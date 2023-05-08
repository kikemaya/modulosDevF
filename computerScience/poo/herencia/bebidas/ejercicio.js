class Bebida{
    constructor(valor){
        this.marca = "Cualquiera";
        this.cantidad = valor;
    }
}

class Refresco extends Bebida{
    constructor(numero, azucar){ //<- 750
        super(numero) // new Bebida(750)
        this.azucar = azucar;
    }
}

class Cerveza extends Bebida{
   constructor(valor, porcentaje){
        super(valor)
        this.alcohol = porcentaje;
   }
}

class CocaCola extends Refresco{
    constructor(numero, azucar, light){
        super(numero, azucar);
        this.light = light;
    }
}

let b = new Bebida("100Ml")
let r = new Refresco("500Ml", 50)

