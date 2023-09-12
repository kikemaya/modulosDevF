// Rest operator en la creación de arrays:

const frutas = ['manzana', 'pera', 'plátano'];
const nuevasFrutas = [...frutas, 'naranja', 'uva'];

console.log(nuevasFrutas); // Resultado: ['manzana', 'pera', 'plátano', 'naranja', 'uva']

// En este ejemplo, el operador rest ...frutas se utiliza para crear un nuevo array nuevasFrutas que contiene todas las frutas del array original frutas, junto con dos frutas adicionales.