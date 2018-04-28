// controllers/ticket.js

import Ticket from '../queries/ticket'

export default class TicketController {

  static index = async (req, res, next) => {
    try {
      const query = new Ticket()
      const data = await query.get_with_payment()
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

  static find = async (req, res, next) => {
    try {
      const query = new Ticket()
      const id = req.params.id
      const data = await query.first_with_payment({ id })
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

  static create = async (req, res, next) => {
    try {
      //TODO 
    } catch (e) {
      next(e)
    }
  }

}

