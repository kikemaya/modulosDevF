// Convertir un array de nombres a un array de saludos:

const nombres = ['Juan', 'María', 'Pedro'];

const saludos = nombres.map(nombre => `¡Hola, ${nombre}!`);

console.log(saludos);
// Resultado: ['¡Hola, Juan!', '¡Hola, María!', '¡Hola, Pedro!']

// En este caso, el método map() se utiliza para crear un nuevo array saludos aplicando una función que concatena la cadena "¡Hola, " antes de cada nombre.