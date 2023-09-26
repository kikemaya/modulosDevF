// Constructor de objetos: "Object" es una función constructora incorporada en JavaScript que se utiliza para crear objetos.Puedes utilizar la sintaxis new Object() para crear un objeto vacío. Por ejemplo:

const miObjeto = new Object();

console.log(miObjeto);

// 2. Notación de objeto literal: Además de utilizar new Object(), puedes crear objetos de forma más concisa utilizando la notación de objeto literal. Por ejemplo:
const persona = {
  nombre: "Juan",
  edad: 30
};

// Herencia: "Object" es la base de la jerarquía de prototipos en JavaScript.Casi todos los objetos en JavaScript tienen "Object" en su cadena de prototipos.Esto significa que los objetos heredan propiedades y métodos de "Object".Por ejemplo, todos los objetos en JavaScript tienen métodos como toString() y hasOwnProperty() gracias a la herencia de "Object".