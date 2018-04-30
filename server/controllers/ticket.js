// controllers/ticket.js

import Ticket from '../queries/ticket'
import Payment from '../queries/payment'

import { spots_available, get_owed } from '../../common/utils'

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
      let paid_data = await payment.create({ticket_id: data.id})
      data.paid = paid_data.paid
      data.owed = get_owed(data)
      res.send({ data })

    } catch (e) {
      next(e)
    }
  }

  static update = async (req, res, next) => {
    try {

      const ticket = new Ticket()

      if (req.body.active) {
        const check = await ticket.first_with_payment({id: req.body.id})
        if (check.paid === false) {
          throw new Error("Ticket is unpaid, cannot update")
        }
      }

      let updated = await ticket.update({ id: req.params.id }, req.body)
      let data = await ticket.first_with_payment({ id: updated.id })
      data.owed = get_owed(data)
      res.send({ data })

    } catch (e) {
      next(e)
    }
  }

}

