// actions/ticket.js

import { get, post } from '../utils/http.js'
import {
  SET_TICKETS,
  ADD_TICKET
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

export const create_ticket = data => {
  return async dispatch => {
    try {
      const response = await post('tickets', data)
      const json = await response.json()
      dispatch(add_ticket(json.data))
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

export const add_ticket = new_state => {
  return {
    type: ADD_TICKET,
    new_state
  }
}
