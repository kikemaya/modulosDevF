// Las promesas en JavaScript son objetos que representan un valor que puede estar disponible ahora, en el futuro o nunca. Se utilizan comúnmente para manejar operaciones asíncronas. 

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