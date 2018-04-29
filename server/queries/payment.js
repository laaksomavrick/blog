// queries/payment.js

import db from '../config/db'
import Query from './'

export default class Payment extends Query {

  constructor() {
    super("payments")
  }

}
