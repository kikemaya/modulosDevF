// Rest operator en objetos:

const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid',
  profesion: 'Ingeniero'
};

const { nombre, edad, ...infoAdicional } = persona;

console.log(nombre); // Resultado: 'Juan'
console.log(edad); // Resultado: 30
console.log(infoAdicional); // Resultado: { ciudad: 'Madrid', profesion: 'Ingeniero' }

// En este ejemplo, el operador rest ...infoAdicional recoge las propiedades restantes del objeto persona después de haber desestructurado las propiedades nombre y edad.