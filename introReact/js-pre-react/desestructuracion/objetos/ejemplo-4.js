// Desestructuración anidada de objetos:

const persona = {
  nombre: 'Carlos',
  direccion: {
    calle: '123 Calle Principal',
    ciudad: 'Barcelona'
  }
};

// Desestructuración anidada
const { nombre, direccion: { calle, ciudad } } = persona;

console.log(nombre); // Resultado: 'Carlos'
console.log(calle);  // Resultado: '123 Calle Principal'
console.log(ciudad); // Resultado: 'Barcelona'

// En este ejemplo, estamos desestructurando tanto la propiedad nombre como las propiedades anidadas calle y ciudad del objeto persona.