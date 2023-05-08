const cinthya = {
  // IDEALMENTE, SI LE PONES "" A UN ATRIBUTO, PARA MANTENER
  // TU CODIGO UNIFORME, TIENES QUE AÑADIRSELAS A LOS DEMAS ATRIBUTOS
  "id": "54g3h43g5hj43g",
  "primer nombre": "Cinthya",
  "apellido": "Garcilazo",
  "intereses": ["Motocicletas", "Perros", "Mermelada"],
  "x1": "uno",
  "x2": "dos"
}

let claveDinamicaAConsultar = "intereses"
console.log(cinthya[claveDinamicaAConsultar]);

// TAMBIEN PODEMOS ACCEDER A LOS VALORES DE NUESTROS OBJETOS
// CON LA NOTACION DE CORCHETES CUADRADOS/SQUARE BRACKETS
console.log(cinthya["primer nombre"]);
console.log(cinthya.apellido);

// LOS SQUARE BRACKETS, NOS PERMITEN AÑADIR UN POCO 
// MAS DE LOGICA A NUESTRAS CONSULTAS A OBJETOS LITERALES
console.log(cinthya["x" + 2]);
