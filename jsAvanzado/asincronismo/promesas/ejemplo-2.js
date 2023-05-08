let x = 10;

// Formas de usar promesas
// 1. Creando las reglas de la promesa. Nos puede tocar hacerlo ò no
const traerHelado = new Promise((resolve, reject) => {
  if (x === 10) {
    resolve("Ten helado");
  }
  reject("No cumpli mi promesa, chefsito");
});

// 2. Recibiendo promesas como respuesta
traerHelado
  .then((response) => {
    console.log(response);
    console.log("¿te gusto el helado?");
    return "¿si o no?";
  })
  .then((mensaje) => {
    console.log(mensaje);
  })
  .then(() => {
    console.log("Si me gusto el helado.");
  })
  .catch((err) => {
    console.error(err);
  });