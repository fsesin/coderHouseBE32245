// ES7

const expMath = Math.pow(4, 3)
const exp = 4 ** 3
//console.log(expMath,exp)

const arrayNum = [1, 2, 3, 4, 5, 6, 7]
//console.log(arrayNum.includes(8))

// ES8

const obj = {
  nombre: 'Juan',
  apellido: 'Abello',
  edad: 37,
  esCasado: true,
}

// console.log(Object.entries(obj));
// console.log(Object.values(obj))
// console.log(Object.keys(obj));

const arrayObj = Object.entries(obj)
//console.log(arrayObj)
const arrayObjMod = arrayObj.map(([c, v]) => [c, `${v} modificado`])
//console.log(arrayObjMod)
const objMod = Object.fromEntries(arrayObjMod)
//console.log(objMod)

// ES9

const animales1 = ['pajaro', 'vaca', 'pez', 'perro', 'gato']
const animales2 = ['toro', 'guacamaya', 'raton', 'cerdo']
// SPREAD
//const animales = animales1.concat(animales2)
const animales = [...animales1, ...animales2]
// obj = {...obj1,...obj2}
//console.log(animales)

const objCopia = { ...obj, curso: 'Programacion BackEnd' }
objCopia.nombre = 'Luis'
//console.log(obj)
//console.log(objCopia)
const menor = Math.min(...arrayNum)
//console.log(menor)

// REST

const funcionRest = (a, b, ...otrosParams) => {
  console.log(a)
  console.log(b)
  console.log(otrosParams)
}
//funcionRest(1,2,3,4,5,6,7,8,9)

const [primerAnimal, segundoAnimal, tercerAnimal, ...otrosAnimales] = animales
//console.log(otrosAnimales)

const { nombre, apellido, ...otrasProps } = obj
//console.log(otrasProps)

// ACTIVIDAD EN CLASE

const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
]
const arrayFrutas = []
let total = 0
objetos.forEach((obj) => {
  // crear array de frutas sin repetir

  const arrayObj = Object.keys(obj)
  arrayObj.forEach((fruta) => {
    //!arrayFrutas.includes(fruta) && arrayFrutas.push(fruta)
    if (!arrayFrutas.includes(fruta)) {
      arrayFrutas.push(fruta)
    }
  })

  // obtener total de frutas
  const arrayVal = Object.values(obj)
  arrayVal.forEach((val) => (total += val))
  //console.log(arrayVal)
})
//console.log(arrayFrutas)
//console.log(total)

//ES10

const saludo = '     bienvenidos al curso de BE    '
//console.log(saludo)
//console.log(saludo.trim())

const array = [1, 2, 3, 4, [5, 6, 7, [8, 9, 0, 1, [1, 2, 3, 4, 5]]], 9, 0]
//console.log(array.flat(4))

//ES11

// falsy
// or ||
const numero = 0
const comentario = ''
//console.log(numero ?? 10)
//console.log(numero || 10)

//const PORT = variable || 8080

// HANDS ON LAB

class TicketManager {
  #precioBaseDeGanancia = 50

  constructor() {
    this.eventos = []
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

  #generarId() {
    const id =
      this.eventos.length === 0
        ? 1
        : this.eventos[this.eventos.length - 1].id + 1
    return id
  }
}

const ticketManager = new TicketManager()
ticketManager.agregarEvento('Primer evento','Primer lugar',100)
ticketManager.agregarEvento('Segundo evento','Segundo lugar',200)
console.log(ticketManager)
