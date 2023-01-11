import fs from 'fs'

export default class Usuario {
  constructor(path) {
    this.path = path
  }

  async crearUsuario(obj) {
    try {
      const usuariosArchivo = await this.buscarUsuarios()
      let id =
        usuariosArchivo.length === 0
          ? 1
          : usuariosArchivo[usuariosArchivo.length - 1].id + 1
      const usuario = { id, ...obj }
      usuariosArchivo.push(usuario)
      await fs.promises.writeFile(this.path, JSON.stringify(usuariosArchivo))
      return usuario
    } catch (error) {
      return error
    }
  }

  async buscarUsuarios() {
    try {
      if (fs.existsSync(this.path)) {
        const usuariosArchivo = await fs.promises.readFile(this.path, 'utf-8')
        const usuarioJS = JSON.parse(usuariosArchivo)
        return usuarioJS
      } else {
        return []
      }
    } catch (error) {
      return error
    }
  }

  async buscarUsuarioPorId(idUsuario) {
    try {
      const usuarios = await this.buscarUsuarios()
      const usuario = usuarios.find((u) => u.id === idUsuario)
      return usuario
    } catch (error) {
      return error
    }
  }

  async modificarUsuario(idUsuario, obj) {
    try {
      const usuariosArchivo = await this.buscarUsuarios()
      const indexUsuario = usuariosArchivo.findIndex((u) => u.id === idUsuario)
      if (indexUsuario === -1) throw new Error('Usuario no encontrado')
      const usuarioActualizado = { ...usuariosArchivo[indexUsuario], ...obj }
      usuariosArchivo.splice(indexUsuario, 1, usuarioActualizado)
      await fs.promises.writeFile(this.path, JSON.stringify(usuariosArchivo))
      return usuarioActualizado
    } catch (error) {
      return error
    }
  }

  async eliminarUsuario(idUsuario) {
    try {
        const usuariosArchivo = await this.buscarUsuarios()
        const indexUsuario = usuariosArchivo.findIndex((u) => u.id === idUsuario)
        if (indexUsuario === -1) throw new Error('Usuario no encontrado')
        usuariosArchivo.splice(indexUsuario, 1)
        await fs.promises.writeFile(this.path, JSON.stringify(usuariosArchivo))
        return idUsuario
      } catch (error) {
        return error
      }
  }
}
