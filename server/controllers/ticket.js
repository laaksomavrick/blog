// controllers/ticket.js

import Ticket from '../queries/ticket'

export default class TicketController {

  static index = async (req, res, next) => {
    try {
      const query = new Ticket()
      const data = await query.get()
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

  static find = async (req, res, next) => {
    try {
      const query = new Ticket()
      const id = req.params.id
      const data = await query.first({ id })
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

