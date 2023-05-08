"use strict"

const promesa = new Promise((resolve, reject) => {
  //Código asincrono
  resolve()
  reject()
});


// then => resolve
// catch => reject
promesa.then((response) => {
  console.log(response);
  //Código...
}).catch((error) => {
  console.log(error);
  //Código...
})