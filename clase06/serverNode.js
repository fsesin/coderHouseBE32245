//const http = require('http')
import http from 'http'

const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/carrito') {
    res.end('Carrito')
  } else {
    res.end('Segunda prueba')
  }
})

const PORT = 8080

server.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})
