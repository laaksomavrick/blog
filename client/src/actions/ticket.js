// actions/ticket.js

import { get, post } from '../utils/http.js'
import {
  SET_TICKETS
} from '../constants/constants.js'

export const get_tickets = () => {
  return async (dispatch) => {
    try {
      const response = await get('tickets')
      const json = await response.json()
      dispatch(set_tickets(json.data))
    } catch (e) {
      console.log(e)
    }
  }
}

export const set_tickets = new_state => {
  return {
    type: SET_TICKETS,
    new_state
  }
}
