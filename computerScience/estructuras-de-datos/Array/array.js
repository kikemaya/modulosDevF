"use strict";

// CREAR UN MÈTODO PARA AÑADIR Y QUITAR UN PRIMER ELEMENTO

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this._shiftIndex(index);
    this.length--;
    return item;
  }
  _shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
  }
  // remueve el primer elemento
  shift() {
    const firstItem = this.data[0];
    this._shiftIndex(0);
    this.length--;
    return firstItem;
  }
  //añade un primer elemento
  unshift(item) {
    const lastItem = this.data[this.length - 1];

    for (let i = 0; i <= this.length - 1; i++) {
      this.data[i + 1] = this.data[i];
    }

    this.data[this.length] = lastItem;
    this.data[0] = item;

    this.length++;
    return item;
  }
}

const arr = new MyArray();
arr.push("Hola");
arr.push("Mundo");
arr.push("!");
console.log("push", arr);
arr.shift();
console.log("shift", arr);
arr.unshift("Hola");
console.log("unshift", arr);
