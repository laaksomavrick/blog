const _ = dotenv.config()
import dotenv from 'dotenv'
import express from 'express'
import body_parser from 'body-parser'

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
  res.status(404).json(data)
})

app.use((err, req, res, next) => {
  const error = err.toString()
  res.status(500).send({ error })
})

app.listen(process.env.EXPRESS_PORT, process.env.EXPRESS_HOST)
console.log(`Running server on http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`)
