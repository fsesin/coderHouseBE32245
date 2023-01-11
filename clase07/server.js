import express from 'express'
import UsuarioClass from './Usuario.js'

const app = express()
const usuariosClass = new UsuarioClass('./Usuarios.json') 



app.use(express.json())
app.use(express.urlencoded({extended:true}))

// rutas
app.get('/usuarios',async(req,res)=>{
try {
    const usuarios = await usuariosClass.buscarUsuarios()
    res.json({usuarios})
} catch (error) {
    res.send(error)
}
})

app.get('/usuarios/:idUsuario',async(req,res)=>{
    const {idUsuario} = req.params
    try {
        const usuario = await usuariosClass.buscarUsuarioPorId(parseInt(idUsuario))
        if(usuario){
            res.status(200).json({message:'Usuario encontrado con exito',usuario})
        } else {
            res.status(400).json({error:'No existe un usuario con este id'})
        }
    } catch (error) {
        res.send(error)
    }
})

app.post('/usuarios',async(req,res)=>{
    const obj = req.body
    const usuario = await usuariosClass.crearUsuario(obj)
    res.json({message:"Usuario creado con exito",usuario})
})

app.put('/usuarios/:idUsuario',async(req,res)=>{
    const {idUsuario} = req.params
    const obj = req.body
    const usuario = await usuariosClass.modificarUsuario(parseInt(idUsuario),obj)
    res.json({message:'Usuario actualizado con exito',usuario})
})

app.delete('/usuarios/:idUsuario',async(req,res)=>{
    const {idUsuario} = req.params
    const usuario = await usuariosClass.eliminarUsuario(parseInt(idUsuario))
    res.json({message:'Usuario eliminado con exito',usuario})
})


app.listen(8080,()=>{
    console.log('Escuchando al puerto 8080')
})