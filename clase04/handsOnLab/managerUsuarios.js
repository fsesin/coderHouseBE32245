const fs = require('fs')
const rutaUsuarios = 'Usuarios.json'

class ManagerUsuarios {
  async consultarUsuarios() {
    try {
      if (fs.existsSync(rutaUsuarios)) {
        const infoUsuarios = await fs.promises.readFile(rutaUsuarios, 'utf-8')
        const infoUsuariosJS = JSON.parse(infoUsuarios)
        return infoUsuariosJS
      } else {
        return []
      }
    } catch (error) {
      console.log(error)
    }
  }

  async crearUsuario(usuario) {
    try {
      const usuarios = await this.consultarUsuarios()
      usuarios.push(usuario)
      await fs.promises.writeFile(rutaUsuarios, JSON.stringify(usuarios))
    } catch (error) {
      console.log(error)
    }
  }
}

const manager = new ManagerUsuarios()
//console.log(manager.consultarUsuarios())
async function prueba() {
  try {
    const consultaUsuarios = await manager.consultarUsuarios()
    console.log(consultaUsuarios)
    const usuario1 = {
      nombre: 'Juan',
      apellido: 'Escola',
      edad: 35,
      curso: 'BackEnd',
    }
    await manager.crearUsuario(usuario1)
  } catch (error) {
    console.log(error)
  }
}

prueba()
