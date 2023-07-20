function Lista() {
    this.head = null;
    // 3. CREATE A METHOD TO AUTOMATE THE NODE ADDITION
    

};

function Nodo(value) {
    this.value = value;
    this.next = null;
}

Lista.prototype.add = function (value) {
    if (this.head === null) this.head = new Nodo(value)
    else {
        let referenciaActual = this.head

        while(referenciaActual.next !== null) {
            referenciaActual = referenciaActual.next 
        }
        referenciaActual.next = new Nodo(value)
    }
}

let list = new Lista()
list.add(56)
list.add('hola')
list.add([4, 5, 6, 7, 8])

console.log(list);

// EJEMPLO 1
// let list = new Lista()
// let nodo = new Nodo(5)
// let nodo2 = new Nodo("palabra")

// console.log(list);
// console.log(nodo);
// console.log(nodo2);

// list.head = nodo
// console.log(list);

// list.head.next = nodo2
// console.log(list);

// EJEMPLO 2
// list.head = new Nodo(5)
// list.head.next = new Nodo('palabra')

// console.log(list);