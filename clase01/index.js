// DATOS PRIMITIVOS

let string = 'Primer texto en JS'
let numero = 5
let booleano = true
let nulo = null
let indefinido = undefined

// DATOS OBJETOS
let fecha = new Date()
let arreglo = [1, 2, 3, 4, 5]
let objeto = {
  nombre: 'Maria',
  apellido: 'Abello',
  edad: 35,
}

// let primeraVariable
// primeraVariable = 5

// COPIA DE UN ARREGLO/OBJETO
let objetoCopia = { ...objeto } // spread
objetoCopia.nombre = 'Laura'
//console.log(objetoCopia);
//console.log(objeto);

// ACTIVIDAD EN CLASE

// let nombre = 'Juan';
// let edad = 35;
// let precio = 100;
// let series = ['GOT','Breaking Bad'];

let usuarios = [
  {
    nombre: 'Juan',
    edad: 35,
    precio: 100,
    series: ['GOT', 'Breaking Bad'],
  },
  {
    nombre: 'Andres',
    edad: 28,
    precio: 150,
    series: ['Friends', 'Breaking Bad'],
  },
]

usuarios.forEach((usuario) => {
  //usuario.edad = usuario.edad + 1
  //usuario.edad += 1
  usuario.edad++
  usuario.series.push('Dark')
})
//console.log(usuarios)

// VAR - LET - CONST

var primeraVariable = 10
let segundaVariable = 15
{
  //console.log(primeraVariable)
  //console.log(segundaVariable)
  var terceraVariable = 'tercera variable'
  let cuartaVariable = 'cuarta variable'
}
//console.log(terceraVariable)
//console.log(cuartaVariable)

// LET - CONST
const contador = 0
//contador++
//console.log(contador)

// objetos - arreglos - funciones
const array1 = [1, 2, 3, 4, 5]
array1.push(6)
//console.log(array1)

// funciones

// function sumar(num1,num2){
// // let resultado = num1 + num2
// // return resultado
// //console.log(resultado)
// return num1+num2
// }
// console.log(sumar(1,2))
// const resultadoSuma = sumar(1,2)
// console.log(resultadoSuma+100)

// =>

// const restar = (num1,num2)=>{
//     return num1-num2
// }
// const restar = (num1, num2) => num1 - num2
// const sumar = (num1) => num1 + 10

// function ejemploScope() {
//   let i = 0
//   for (let j = 0; j < 10; j++) {
//     let k = i + j
//     i = k + 1
//   }
//   console.log(k)
// }

// TEMPLATE STRINGS
const edad = 41
//console.log('La edad de Pablo es '+edad+' y su apellido es '+apellido)
//console.log(`La edad de Pablo es ${edad} y su apellido es ${apellido}`);

// HANDS ON LAB

function mostrarLista(array) {
  if (array.length === 0) {
    console.log('Lista vacia')
  } else {
    array.forEach((elem) => console.log(elem))
    console.log(`La cantidad de elementos del arreglo es ${array.length}`)
  }
}

//mostrarLista([])
//mostrarLista([1, 2, 3, 4, 5])

//Closures

function closureFunction() {
  let x = 0
  return function () {
    console.log(x)
  }
}

// CLASES

class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre
    this.email = email
    this.password = password
  }
  tieneEmail() {
    if (this.email) {
      return true
    } else {
      return false
    }
  }
}

const usuario1 = new Usuario('Juan', 'juan@mail.com', 'abcd1234')
const usuario2 = new Usuario('Camila', null, '12345abcd')

//console.log(usuario1.tieneEmail())
//console.log(usuario2.tieneEmail());

// HANDS ON LAB

class Contador {
  constructor(nombre) {
    this.nombre = nombre
    this.contadorInd = 0
  }
  static contadorGlobal = 0

  getResponsable() {
    console.log(this.nombre)
  }
  getCuentaIndividual() {
    console.log(`Individual ${this.nombre}: ${this.contadorInd}`)
  }
  getCuentaGlobal() {
    console.log(`Global ${Contador.contadorGlobal}`)
  }
  contar() {
    this.contadorInd++
    Contador.contadorGlobal++
  }
}

const contador1 = new Contador('Juan')
const contador2 = new Contador('Camila')
//console.log(contador1)
//console.log(contador2)
contador1.getResponsable()
contador1.getCuentaIndividual()
contador1.getCuentaGlobal()
contador1.contar()
contador1.getCuentaIndividual()
contador1.getCuentaGlobal()
contador2.contar()
contador1.getCuentaIndividual()
contador1.getCuentaGlobal()
contador2.contar()
contador2.getCuentaIndividual()
contador2.getCuentaGlobal()
