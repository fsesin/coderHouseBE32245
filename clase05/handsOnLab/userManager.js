const fs = require('fs')
const crypto = require('crypto')

const ruta = 'Usuarios.json'
class UserManager {
  async consultarUsuarios() {
    if (fs.existsSync(ruta)) {
      const data = await fs.promises.readFile(ruta, 'utf-8')
      const usuarios = JSON.parse(data)
      return usuarios
    } else {
      return []
    }
  }

  async crearUsuario(nombre, apellido, userName, contrasena) {
    const usuario = {
      nombre,
      apellido,
      userName,
      contrasena,
    }

    // CRYPTO
    usuario.key = crypto.randomBytes(128).toString('base64')
    usuario.contrasena = crypto
      .createHmac('sha256', usuario.key)
      .update(usuario.contrasena)
      .digest('hex')
    const usuarios = await this.consultarUsuarios()
    usuarios.push(usuario)
    await fs.promises.writeFile(ruta, JSON.stringify(usuarios))
  }

  async validarUsuario(userName, contrasena) {
    const usuarios = await this.consultarUsuarios()
    const usuario = usuarios.find((u) => u.userName === userName)
    if (!usuario) {
      console.log('Usuario o contrasena incorrecta')
      return
    }
    const contrasenaEncrypt = crypto
    .createHmac('sha256', usuario.key)
    .update(contrasena)
    .digest('hex')

    if(contrasenaEncrypt === usuario.contrasena){
        console.log('Logueado')
    } else {
        console.log('Usuario o contrasena incorrecta')
    }
  }
}

const manager = new UserManager()
async function env() {
  //await manager.crearUsuario('Franco', 'Hoyos', 'fhoyos', 'abcde')
  //const usuarios = await manager.consultarUsuarios()
  //console.log(usuarios)
  await manager.validarUsuario('fhoyos','abcd')
}
env()
