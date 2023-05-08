'use strict';

//Aquí defino mis variables
//Leer nodos
let parrafo = document.querySelector('#parrafito');
let boton = document.getElementById('botoncito');
let listita = document.querySelector('#listita');
// console.log(parrafo);

let frutas = ['Naranja', 'Toronja', 'Uva', 'Limon']
// console.log(frutas);

boton.addEventListener('click', btnSaludar);

function btnSaludar() {
  console.log('Has dado un click');

  // parrafo.innerHTML = "<h1>Has creado un titulo!!</h1>";

  for (var i = 0; i < frutas.length; i++) {
    document.write(`<li>${frutas[i]}</li>`)
    console.log(frutas[i]);
  }
}

// let frutas = [
//     'Mandarina',
//     'Pera',
//     'Uva',
//     'Fresa',
//     'Granada',
// ];

// frutas[1] = 'Durazno';
// frutas.push('Aguacate');
// frutas.push('Limón');
// frutas.pop();
// console.log(frutas);
// console.log(frutas[1]);
// console.log(frutas.length);
