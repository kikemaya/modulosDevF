// En JavaScript, los parámetros por defecto (default parameters) permiten asignar valores predeterminados a los parámetros de una función en caso de que no se les pase un valor al llamar la función. Aquí tienes tres ejemplos de cómo se pueden utilizar los parámetros por defecto:

// Asignar un valor predeterminado simple:

// En este ejemplo, la función saludar tiene un parámetro nombre con un valor predeterminado de "Usuario". Si no se proporciona un valor para nombre al llamar a la función, se usará el valor predeterminado.

function saludar(nombre = "Usuario") {
  console.log(`Hola, ${nombre}!`);
}

saludar(); // Salida: Hola, Usuario!
saludar("Juan"); // Salida: Hola, Juan!


// 2. Uso de expresiones para valores predeterminados:

// Puedes usar expresiones más complejas como valores predeterminados. En este caso, la función calcularPrecioTotal calcula el precio total de un producto teniendo en cuenta el precio unitario y la cantidad, y usa una expresión para establecer un valor predeterminado de 0 para la cantidad.

function calcularPrecioTotal(precioUnitario, cantidad = 0) {
  const total = precioUnitario * cantidad;
  return total;
}

console.log(calcularPrecioTotal(10)); // Salida: 0
console.log(calcularPrecioTotal(10, 5)); // Salida: 50

// 3. Valores predeterminados basados en otros parámetros:

// Puedes establecer valores predeterminados basados en otros parámetros de la función. En este ejemplo, la función crearPersona toma un parámetro nombre y utiliza ese valor para inicializar el parámetro edad, que tiene un valor predeterminado basado en nombre.

function crearPersona(nombre, edad = nombre.length * 2) {
  return { nombre, edad };
}

console.log(crearPersona("Alice")); // Salida: { nombre: "Alice", edad: 10 }
console.log(crearPersona("Bob", 30)); // Salida: { nombre: "Bob", edad: 30 }

// Estos son solo algunos ejemplos de cómo puedes utilizar los parámetros por defecto en JavaScript para hacer que tus funciones sean más flexibles y manejen casos en los que los argumentos no se proporcionan explícitamente.