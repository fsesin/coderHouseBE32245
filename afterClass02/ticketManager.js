import fs from 'fs'

export class TicketManager {
  #precioBaseDeGanancia = 0.15

  constructor(path) {
    this.path = path
  }

  async getEventos(limit) {
    if (fs.existsSync(this.path)) {
      const eventos = await fs.promises.readFile(this.path, 'utf-8')
      if(limit==='max'){
        return JSON.parse(eventos)
      } else {
        return JSON.parse(eventos).slice(0,limit)
      }
    } else {
      return []
    }
  }

  async getEventoById(idEvento) {
    const eventos = await this.getEventos()
    const evento = eventos.find((e) => e.id === parseInt(idEvento))
    if (evento) {
      return evento
    } else {
      return 'evento no existe'
    }
  }

  async agregarEvento(
    nombre,
    lugar,
    precio,
    capacidad = 50,
    fecha = new Date()
  ) {
    const evento = {
      id: await this.#generarId(),
      nombre,
      lugar,
      precio: precio + this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    }
    const eventos = await this.getEventos()
    eventos.push(evento)
    await fs.promises.writeFile(this.path, JSON.stringify(eventos))
  }

  async #generarId() {
    const eventos = await this.getEventos()
    let id = eventos.length === 0 ? 1 : eventos[eventos.length - 1].id + 1
    return id
  }
}

// const ticketManager = new TicketManager('DB.json')

// async function prueba() {
//   //await ticketManager.agregarEvento('Evento3', 'Lugar3', 2)
//   //await ticketManager.agregarEvento('Evento4', 'Lugar4', 10)
//   const evento = await ticketManager.getEventoById(5)
//   console.log(evento)
// }

// prueba()
