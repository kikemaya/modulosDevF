// Promesa básica:
// En este ejemplo, creamos una promesa que se resuelve después de un segundo y muestra un mensaje cuando se resuelve.

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("¡Promesa resuelta!");
  }, 1000);
});

miPromesa.then((resultado) => {
  console.log(resultado); // Salida: ¡Promesa resuelta!
});
