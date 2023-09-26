// SIRVE PARA AGREGAR O BORRAR ELEMENTOS DE UN ARREGLO. PIDE COMO PARAMETROS EL
// INDEX Y UNA CANTIDAD DE ELEMENTOS A BORRAR. 

// MODIFICA EL ARREGLO ORIGINAL

const verduras = ["Cebolla", "Perejil", "Tomate", "Calabaza", "Brocoli"]

verduras.splice(2)
console.log(verduras)

// TAMBIEN PUEDO AGREGAR UN VALOR DE REEMPLAZO PARA ESA POSICION
verduras.splice(0, 1, "nuevo Comienzo")
console.log(verduras);