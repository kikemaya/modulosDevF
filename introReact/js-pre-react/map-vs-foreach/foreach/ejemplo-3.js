// 3. Calcular la suma de elementos en un array:

const valores = [10, 20, 30, 40, 50];
let suma = 0;

valores.forEach(valor => {
  suma += valor;
});

console.log(suma); // Resultado: 150

// En este ejemplo, `forEach()` se utiliza para iterar a través de los elementos del array `valores` y sumarlos para calcular la suma total.

// El método `forEach()` es útil cuando deseas realizar operaciones sobre los elementos de un array sin necesidad de crear un nuevo array como resultado.