// Rest operator en desestructuración de arrays:

const numeros = [1, 2, 3, 4, 5];
const [primerNumero, segundoNumero, ...restoDeNumeros] = numeros;

console.log(primerNumero); // Resultado: 1
console.log(segundoNumero); // Resultado: 2
console.log(restoDeNumeros); // Resultado: [3, 4, 5]

// En este caso, el operador rest ...restoDeNumeros recoge los elementos restantes del array numeros después de haber asignado los dos primeros elementos a las variables primerNumero y segundoNumero.