// Desestructuración con valores por defecto:

const arreglo = [1, 2];

// Desestructuración con valores por defecto
const [primerValor, segundoValor, tercerValor = 3] = arreglo;

console.log(primerValor); // Resultado: 1
console.log(segundoValor); // Resultado: 2
console.log(tercerValor); // Resultado: 3 (valor por defecto)

// En este ejemplo, estamos desestructurando el arreglo arreglo en tres variables, pero en este caso, hemos proporcionado un valor por defecto de 3 para tercerValor. Si el elemento correspondiente en el arreglo no existe, se utilizará el valor por defecto.