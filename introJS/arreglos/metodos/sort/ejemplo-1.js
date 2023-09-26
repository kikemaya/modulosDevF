// ORDENA DE FORMA ASCENDENTE (A - Z), POR DEFECTO
const verduras = ["Cebolla", "Perejil", "Tomate", "Calabaza"]
console.log("ordenadas", verduras.sort());

// ES POSIBLE PASARLE UNA FUNCION PARA AJUSTAR EL ORDEN.
const listaDeNumeros = [2, 5, 1, 3, 70, 46, 34]
console.log("numeros ordenados:", listaDeNumeros.sort(function (a, b) { return a - b }));
