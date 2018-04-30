// controllers/ticket.js

import Ticket from '../queries/ticket'
import Payment from '../queries/payment'

import { spots_available } from '../../common/utils'

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

      const ticket = new Ticket()
      const payment = new Payment()
      const currently_occupied = await ticket.count('active')

      if (currently_occupied >= spots_available()) {
        throw new Error("No parking spots are available")
      }

      let data = await ticket.create(req.body)
      data.paid = await payment.create({ticket_id: data.id}).paid
      res.send({ data })

    } catch (e) {
      next(e)
    }
  }

  static update = async (req, res, next) => {
    try {
      const ticket = new Ticket()
      let data = await ticket.update({ id: req.params.id }, req.body)
      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

}

