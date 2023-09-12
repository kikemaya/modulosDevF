// 2. Modificar los elementos de un array in-place:

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero, index, array) => {
  array[index] = numero * 2;
});

console.log(numeros); // Resultado: [2, 4, 6, 8, 10]


// Aquí, `forEach()` se utiliza para iterar a través de cada elemento del array `numeros` y multiplicar cada elemento por 2, modificando así el array original.