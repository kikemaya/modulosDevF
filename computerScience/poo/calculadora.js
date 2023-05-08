class Calculadora {
  constructor(valor1, valor2) {
    this.valor1 = valor1
    this.valor2 = valor2
  }
  suma() {
    return `El resultado es de la suma es ${this.valor1 + this.valor2}`
  }
  resta() {
    return `El resultado es de la resta es ${this.valor1 - this.valor2}`
  }
  multiplicacion() {
    return `El resultado es de la multiplicacion es ${this.valor1 * this.valor2}`
  }
  division() {
    return `El resultado es de la multiplicacion es ${this.valor1 / this.valor2}`
  }
}
let calculadora = new Calculadora(6, 7);
calculadora.suma();
calculadora.resta();
calculadora.multiplicacion();
calculadora.division();