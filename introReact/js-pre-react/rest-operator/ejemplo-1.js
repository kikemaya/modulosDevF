// El operador rest (...) en JavaScript se utiliza para recoger los argumentos restantes en una función, los elementos restantes en un array o las propiedades restantes en un objeto. 

// Rest operator en parámetros de función:

function sumar(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(sumar(1, 2, 3, 4, 5)); // Resultado: 15

// En este ejemplo, el operador rest ...numeros recoge todos los argumentos pasados a la función sumar en un array llamado numeros, que luego se suma utilizando el método reduce.