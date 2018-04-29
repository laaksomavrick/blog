// controllers/payment.js

import Ticket from '../queries/ticket'
import Payment from '../queries/payment'
import { validate_cc } from '../../common/utils'

export default class PaymentController {

  static update = async (req, res, next) => {
    try {

      const cc = req.body.credit_card
      const valid = validate_cc(cc)

      if (!valid) {
        throw new Error("Invalid credit card provided")
      }

      const ticket = new Ticket()
      const payment = new Payment()

      const ticket_id = req.body.ticket_id

      let pay_data = await payment.update({ ticket_id }, { paid: 1 })
      let data = await ticket.first({ id: pay_data.ticket_id })
      data.paid = pay_data.paid

      res.send({ data })
    } catch (e) {
      next(e)
    }
  }

}

