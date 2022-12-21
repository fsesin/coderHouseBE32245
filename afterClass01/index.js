class TicketManager {
  #precioBaseDeGanancia = 0.15

  constructor() {
    this.eventos = []
  }

  getEventos() {
    return this.eventos
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const evento = {
      id: this.#generarId(),
      nombre,
      lugar,
      precio: precio + this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    }
    this.eventos.push(evento)
  }

  agregarUsuario(idEvento, idUsuario) {
    const evento = this.#evaluarEvento(idEvento)
    if (evento) {
      if (!evento.participantes.includes(idUsuario)) {
        evento.participantes.push(idUsuario)
      }
    } else {
      console.log('Evento no existe')
    }
  }

  ponerEventoEnGira(idEvento, nuevoLugar, nuevaFecha) {
    const evento = this.#evaluarEvento(idEvento)
    if (evento) {
      const nuevoEvento = {
        ...evento,
        id: this.#generarId(),
        lugar: nuevoLugar,
        fecha: nuevaFecha,
        participantes: [],
      }
      this.eventos.push(nuevoEvento)
    } else {
      console.log('Evento no existe')
    }
  }

  #generarId() {
    let id =
      this.eventos.length === 0
        ? 1
        : this.eventos[this.eventos.length - 1].id + 1
    return id
  }

  #evaluarEvento(id) {
    return this.eventos.find((evento) => evento.id === id)
  }
}

const tickets = new TicketManager()
tickets.agregarEvento('Evento1', 'Lugar1', 2.5)
tickets.agregarEvento('Evento2', 'Lugar2', 0.8, 100)
tickets.agregarUsuario(1, 1)
tickets.agregarUsuario(3, 1)
tickets.ponerEventoEnGira(1, 'NuevoLugar1', new Date('12/21/2022'))
//console.log(tickets)
//console.log(tickets)


///////////////

// clase padre
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    #saludar(){
        console.log(`Bienvenido ${this.nombre}`)
    }
}
// clase hija
class Estudiante extends Persona{
    constructor(nombre,apellido,curso){
        super(nombre,apellido)
        this.curso = curso
    }
}
//clase hija
class Trabajador extends Persona{
    constructor(nombre,apellido,empleo){
        super(nombre,apellido)
        this.empleo = empleo
    }
}

const persona1 = new Persona('Juan','Villa')
const estudiante1 = new Estudiante('Rodri','Paredes','JavaScript')
const trabajador1 = new Trabajador('Pedro','Abe','Constructor')
console.log(persona1)
console.log(estudiante1)
console.log(trabajador1)