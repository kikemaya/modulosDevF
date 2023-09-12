// Omisión de valores no deseados:

const arreglo = [1, 2, 3, 4, 5];

// Desestructuración con omisión de valores
const [primerValor, segundoValor, , , quintoValor] = arreglo;

console.log(primerValor); // Resultado: 1
console.log(segundoValor); // Resultado: 2
console.log(quintoValor); // Resultado: 5

// En este ejemplo, estamos desestructurando el arreglo arreglo pero estamos omitiendo los valores en las posiciones 2, 3 y 4 al dejar espacios en blanco entre las comas. Así, primerValor toma el valor 1, segundoValor toma el valor 2 y quintoValor toma el valor 5 del arreglo.