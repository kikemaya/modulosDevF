'use strict'

//leer nodos
//estas formas son mas especificas. Gastan menos recursos
let parrafo = document.getElementById('parrafo')

//Seleccionan y almacenan en una HTMLCollection
let secondP = document.getElementsByClassName('second-p')
let spansitos = document.getElementsByTagName('span')

console.log("primer parrafo", parrafo);

console.log("segunfo parrafo", secondP);
console.log("todos los span", spansitos);

//Es mas generalista y poderoso. Gasta mas recursos
//el primero, selecciona el primer elemento de su tipo que encuentra.
//el segundo, selecciona todos los elementos que encuentra,
//y los almacena en algo llamado la NodeList
let titulo = document.querySelector('.p-query')
let parrafos = document.querySelectorAll('.p-query')

console.log("comparten la misma clase", titulo)
console.log("comparten la misma clase", parrafos)