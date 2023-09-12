// Rest operator en parámetros de funciones en arrow functions:

const sumar = (...numeros) => {
  return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(sumar(1, 2, 3, 4, 5)); // Resultado: 15

// Este es un ejemplo similar al primer ejemplo, pero utilizando una función flecha (arrow function) en lugar de una función regular.