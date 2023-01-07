import express from 'express'
import { TicketManager } from './ticketManager.js'
const app = express()
const ticketManager = new TicketManager('DB.json')

app.get('/eventos', async (req, res) => {
  const { limit } = req.query
  const eventos = await ticketManager.getEventos(limit || 'max')
  res.json({ eventos })
})

app.get('/eventos/:idEvento', async (req, res) => {
  const { idEvento } = req.params
  const evento = await ticketManager.getEventoById(idEvento)
  res.json({ evento })
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Escuchando al ${PORT}`)
})
