// Enviar argumentos a una función:

// Puedes utilizar el operador de propagación para pasar un array como una lista de argumentos a una función.

function sumar(a, b, c) {
  return a + b + c;
}

const numeros = [1, 2, 3];
const resultado = sumar(...numeros);

console.log(resultado); // Salida: 6
