// routes.js

import express from 'express'

import TicketController from '../controllers/ticket'
import PaymentController from '../controllers/payment'

let router = express.Router()

router.get('/tickets', TicketController.index)
router.get('/tickets/:id', TicketController.find)
router.post('/tickets', TicketController.create)
router.put('/tickets/:id', TicketController.update)

router.put('/payments/:id', PaymentController.update)

export default router
