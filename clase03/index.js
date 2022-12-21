function primeraFunc(parametros) {
  //bloque de codigo a ejecutar
  return function () {}
}

// funciones flecha

const segundaFunc = (parametros) => {
  // bloque de codigo a ejecutar
}

const terceraFunc = (parametro) => parametro + 2

// CALLBACKS

function callback(param) {
  return `El usuario escribio: ${param}`
}

function principal(param1, cb) {
  const respuesta = cb(param1)
  return respuesta
}

// console.log(principal('mucho gusto', callback))

// EJERCICIO

const operacion = (num1, num2, funcionCB) => {
  return funcionCB(num1, num2)
}

const funcionSuma = (n1, n2) => n1 + n2
const funcionResta = (n1, n2) => n1 - n2
const funcionMult = (n1, n2) => n1 * n2
const funcionDiv = (n1, n2) => n1 / n2

// console.log(operacion(5, 2, funcionSuma))
// console.log(operacion(5, 2, funcionResta))
// console.log(operacion(5, 2, funcionMult))
// console.log(operacion(5, 2, funcionDiv))

// CALLBACKS ANIDADOS

const familiares = []
const usuarios = []

// agregar un familiar a un usuario

function agregarFamiliar(usuario, infoFamiliar) {
  // buscar que el usuario exista
  usuarios.findById(usuario.id, function (error, usuario) {
    if (error) {
      return error
    } else {
      familiares.findByLastName(usuario.lastName, function (error, familiares) {
        if (error) {
          return error
        } else {
          if (familiares.includes(infoFamiliar)) {
            return 'familiar ya existe'
          } else {
            familiares.createOne(infoFamiliar, function (error) {
              if (error) {
                return error
              } else {
                return 'Familiar creado con exito'
              }
            })
          }
        }
      })
    }
  })
}

// CREAR PROMESAS

function findById(id) {
  return new Promise((resolve, reject) => {
    const usuario = usuarios.find((usuario) => usuario.id === id)
    if (usuario) {
      resolve(usuario)
    } else {
      reject('No encontre ningun usuario')
    }
    // usuario ? resolve(usuario) : reject('No encontre ningun usuario')
  })
}

// .then .catch

//console.log(findById(2))
// findById(2)
//   .then((usuario) => {
//     return usuarios.findByName(usuario.name)
//   }) // usuario
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error)) // error

function agregarFamiliarProm(usuario, infoFamiliar) {
  usuarios
    .findById(usuario.id)
    .then((usuario) => {
      return familiares.findByLastName(usuario.lastName)
    })
    .then((familiares) => {
      if (familiares.includes(infoFamiliar)) {
        return 'familiar ya existe'
      } else {
        return familiares.createOne(infoFamiliar)
      }
    })
    .then(() => 'Familiar creado con exito')
    .catch((error) => {
      console.log(error)
    })
}

async function agregarFamiliarAsync(usuario, infoFamiliar) {
  try {
    const usuario = await usuarios.findBy(usuario.id)
    const familiares = await familiares.findByLastName(usuario.lastName)
    if (familiares.includes(infoFamiliar)) {
      return 'familiar ya existe'
    }
    const nuevoFamiliar = await familiares.createOne(infoFamiliar)
    return 'Familiar creado con exito', nuevoFamiliar
  } catch (error) {
    console.log(error)
  }
}
