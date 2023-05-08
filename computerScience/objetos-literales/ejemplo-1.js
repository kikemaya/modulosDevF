//1. Los objetos literales, son una estructura de datos que tambien son conocidos
// como arreglos asociativos o mapas

// 2. Objetos literales !== de los objetos de POO(Programacion orientada a objetos)

const miCuentaDeAlumno = {
  // clave: valor, key: value
  id: "4g3jh24ghj324hj34",
  nombre: "Enrique",
  apellido: "Maya",
  grupo: 12,
  materias: ["Español", "Matematicas", "Fisica"],
  mostrarGrupo() {
    return `El alumno ${this.nombre}, se encuentra en el grupo numero ${this.grupo}`
  }
}

// PODEMOS ACCEDER A LOS VALORES DE NUESTRAS PROPIEDADES Y METODOS,
// USANDO LA NOTACION DE PUNTO(DOT NOTATION)
console.log(miCuentaDeAlumno.nombre);
console.log(miCuentaDeAlumno.materias[1]);
console.log(miCuentaDeAlumno.mostrarGrupo());