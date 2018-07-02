import express from 'express'
import body_parser from 'body-parser'

import './config';
import db from './database';
import routes from './routes'

const app = express()

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())

app.use('/api', routes)

// Debug routes
// const expressListRoutes = require('express-list-routes')
// expressListRoutes({ prefix: '/auth', }, 'API:', auth_routes)

app.get('*', (req, res) => {
  const data = { error: 'Route not found'}
  res.sendStatus(404).json(data)
})

app.use((err, req, res, next) => {
  const error = err.toString()
  res.sendStatus(500).send({ error })
})

db.on('error', console.error.bind(console, 'connection error: '))

db.once('open', () => {
  console.log(`Running database on ${process.env.DB_HOST}`)
  app.listen(process.env.EXPRESS_PORT, process.env.EXPRESS_HOST)
  console.log(`Running server on http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`)
})

