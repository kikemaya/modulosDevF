// Extraer las longitudes de las palabras en un array de cadenas:

const palabras = ['manzana', 'pera', 'plátano', 'uva'];

const longitudes = palabras.map(palabra => palabra.length);

console.log(longitudes); // Resultado: [7, 4, 7, 3]

// En este ejemplo, el método map() se usa para crear un nuevo array longitudes que contiene la longitud de cada palabra en el array palabras aplicando la función que retorna la propiedad length de cada cadena.

// El método map() es muy útil para transformar los datos en un array de manera eficiente y crear un nuevo array con los resultados de aplicar una función a cada elemento del array original.