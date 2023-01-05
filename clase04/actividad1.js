const fs = require('fs')

const infoPackage = fs.readFileSync('package.json', 'utf-8')
//console.log(infoPackage)

const info = {
  contenidoStr: infoPackage,
  contenidoObj: JSON.parse(infoPackage),
  size: fs.statSync('package.json').size,
}
//console.log(info)

async function crearArchivo() {
  try {
    await fs.promises.writeFile('info.json', JSON.stringify(info))
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}
crearArchivo()