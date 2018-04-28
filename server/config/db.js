// db.js

import dotenv from 'dotenv'
import knex from 'knex'

const _ = dotenv.config()

const connection = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  migrations: {
    tableName: 'migrations'
  },
  debug: process.env.DB_DEBUG
})

export default connection
