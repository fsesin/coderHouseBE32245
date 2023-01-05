import express from 'express'

const productos = [
  {
    id: 1,
    nombre: 'Iphone',
    precio: 500,
    stock: 50,
  },
  {
    id: 2,
    nombre: 'Ipad',
    precio: 200,
    stock: 20,
  },
  {
    id: 3,
    nombre: 'TV',
    precio: 1000,
    stock: 80,
  },
  {
    id: 4,
    nombre: 'Computador',
    precio: 1200,
    stock: 40,
  },
]

const app = express()

const PORT = 8080

// rutas
app.get('/bienvenida', (req, res) => {
  console.log(req)
  res.send('<h1 style="color:blue">BIENVENIDO A NUESTRO PRIMER SERVIDOR</h1>')
})
app.get('/usuario', (req, res) => {
  res.json({
    nombre: 'Juan',
    apellido: 'Hoyos',
    edad: 38,
    correo: 'jhoyos@mail.com',
  })
})

// app.get('/productos/:idProducto',(req,res)=>{
//     const {idProducto} = req.params
//     console.log(idProducto)
//     const producto = productos.find(p=>p.id===parseInt(idProducto))
//     if(producto){
//         res.json(producto)
//     } else {
//         res.send('Producto no encontrado')
//     }
// })

app.get('/productos',(req,res)=>{
    const {orden,limit} = req.query
    console.log(orden,limit)
})



app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
