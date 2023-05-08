"use strict";

// Crear metodo para eliminar un elemento con un key pasado, y obtener todos los key que hay
// Investigar Map
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hashMethod(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }
  set(key, value) {
    const address = this._hashMethod(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }
  peek(key) {
    const address = this._hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  // eliminar un elemento, dado un key
  delete(key) {
    const address = this._hashMethod(key);
    delete this.data[address];
    return this.data[address];
  }
  // obtener todos los key que hay
  peekAllKeys() {
    const allKeys = this.data
      .flat(Infinity)
      .filter((item, index) => item !== undefined && index % 2 === 0);
    return allKeys;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("nombre", "Samantha");
myHashTable.set("name", "Enrique");

console.log("all keys", myHashTable.peekAllKeys());
// https://visualgo.net/en/list?slide=1
// https://www.youtube.com/watch?v=0NzAFk1CwaQ
