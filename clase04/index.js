// console.log('Primer log');
// setTimeout(() => {
//     console.log('Set TimeOut')
// }, 0);
// setInterval(() => {
//     console.log('Set Interval');
// },2000);
// console.log('Ultimo log')

// node JS

const fs = require('fs')

//sync
// escribir
// fs.writeFileSync('primerArchivo.txt','Mi primer archivo')
// fs.writeFileSync('primerArchivo.txt','Segunda prueba')

//leer
// const info = fs.readFileSync('primerArchivo.txt','utf-8')
// console.log(info)

// eliminar
//fs.unlinkSync('primerArchivo.txt')

// EJEMPLO SYNC

// if (fs.existsSync('./archivos/ejemplo.txt')) {
//   const info = fs.readFileSync('./archivos/ejemplo.txt', 'utf-8')
//   console.log(info)
//   fs.appendFileSync('./archivos/ejemplo.txt', ' Agregando informacion')
//   const infoMod = fs.readFileSync('./archivos/ejemplo.txt', 'utf-8')
//   console.log(infoMod)
//   fs.unlinkSync('./archivos/ejemplo.txt')
// } else {
//   fs.writeFileSync('./archivos/ejemplo.txt', 'Mi primer ejemplo')
// }

// FS CON CALLBACKS

// EJEMPLO ASYNC CB
// const ruta = './archivos/ejemploCB.txt'
// if (fs.existsSync(ruta)) {
//   fs.readFile(ruta, 'utf-8', (error, info) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(info)
//       fs.appendFile(ruta, ' Nueva info en CB', (error) => {
//         if (error) {
//           console.log(error)
//         } else {
//           fs.readFile(ruta, 'utf-8', (error, info) => {
//             if (error) {
//               console.log(error)
//             } else {
//               console.log(info)
//               fs.unlink(ruta, (error) => {
//                 if (error) {
//                   console.log(error)
//                 } else {
//                   console.log('Archivo eliminado con exito')
//                 }
//               })
//             }
//           })
//         }
//       })
//     }
//   })
// } else {
//   fs.writeFile(ruta, 'Ejemplo con CB', (error) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log('Archivo creado con exito')
//     }
//   })
// }

// PROMESAS

// fs.promises.appendFile
// fs.promises.writeFile
// fs.promises.readFile

// EJEMPLO ASYNC PROMISES
// const rutaPromises = './archivos/ejemploPromises.txt'
// if (fs.existsSync(rutaPromises)) {
//   fs.promises
//     .readFile(rutaPromises, 'utf-8')
//     .then((info) => {
//       console.log(info)
//       return fs.promises.appendFile(rutaPromises, ' Nueva info con promesas')
//     })
//     .then(() => {
//       return fs.promises.readFile(rutaPromises, 'utf-8')
//     })
//     .then((info) => {
//       console.log(info)
//       return fs.promises.unlink(rutaPromises)
//     })
//     .then(() => console.log('Archivo promesas eliminado con exito'))
//     .catch((error) => console.log(error))
// } else {
//   fs.promises
//     .writeFile(rutaPromises, 'Mi primer archivo promesas')
//     .then(() => console.log('Archivo creado con exito'))
//     .catch((error) => console.log(error))
// }

const productos = [
  { nombre: 'Iphone', precio: 100, stock: 50 },
  {
    nombre: 'Ipad',
    precio: 60,
    stock: 25,
  },
  {
    nombre: 'TV',
    precio: 1200,
    stock: 15,
  },
]
const rutaTXT = './archivos/productos.txt'
const rutaJSON = './archivos/productos.json'

// JSON.parse() - JSON.stringify()

fs.writeFileSync(rutaTXT,JSON.stringify(productos))
fs.writeFileSync(rutaJSON,JSON.stringify(productos))

const productosFile = JSON.parse(fs.readFileSync(rutaTXT,'utf-8'))
console.log(productosFile)
