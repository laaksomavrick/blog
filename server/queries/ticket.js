// queries/ticket.js

import db from '../config/db'
import Query from './'

export default class Ticket extends Query {

  constructor() {
    super("tickets")
  }

}
