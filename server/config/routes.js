// routes.js

import express from 'express'

import TicketController from '../controllers/ticket'

let router = express.Router()

router.get('/tickets', TicketController.index)
router.get('/tickets/:id', TicketController.find)
router.post('/tickets', TicketController.create)


//router.post('/payments/:id', PaymentController.create)

export default router
