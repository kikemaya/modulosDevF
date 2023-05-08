class Student {
  constructor(name, username, classes, address, secretNumber) {
    this.name = name
    this._username = username
    this.classes = classes
    this._address = address
    this._secretNumber = secretNumber
  }
  // GETTERS, SE USAN PARA OBTENER UNA PROPIEDAD PRIVADA Y APLICAR LOGICA EN ELLA, DE MODO QUE NO LA PRESENTEMOS NUNCA DE FORMA DIRECTA
  get getAddress() {
    return this._address
  }

  get getBillingForExam() {
    const billing = this._secretNumber * 2
    return `Estimado ${this.name}, usted tiene que pagar ${billing} para presentar su examen`
  }

  // SI QUEREMOS MODIFICAR EL VALOR DE UNA PROPIEDAD PRIVADA, USAMOS SETTERS
  set validateUserName(newUserName) {
    if (newUserName === "usuarioMaldito" || newUserName === "laCucaracha") {
      console.error("No haga eso, joven. Se ve mal. Ya esta grande xd");
      return
    } else {
      this._username = newUserName
      return newUserName
    }
  }
}

const emilio = new Student("Emilio", "usuarioMaldito", ["History", "Math", "Physics"], "Dillion Av, etc", 150)

console.log(emilio);
console.log("propiedad privada", emilio._address);
console.log(emilio.getAddress);
console.log(emilio.getBillingForExam);

emilio.validateUserName = "laCucaracha";