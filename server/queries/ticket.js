// queries/ticket.js

import db from '../config/db'
import Query from './'
import { get_owed } from '../../common/utils'

export default class Ticket extends Query {

  constructor() {
    super("tickets")
  }

  get_with_payment = async () => {
    let rows = await db.table(this.TABLE)
      .join('payments', 'payments.ticket_id', '=', `${this.TABLE}.id`)
      .select(`${this.TABLE}.*`, `payments.paid`)
    rows = rows.map(r => {
      r.owed = get_owed(r)
      return r
    })
    return rows !== undefined ? rows : null
  }

  first_with_payment = async (conditions) => {
    let record = await this.first(conditions)
    record.owed = get_owed(record) 
    return record
  }

}
