// actions/ticket.js

import { get, post, put } from '../utils/http.js'
import {
  SET_TICKETS,
  ADD_TICKET,
  UPDATE_TICKET
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

export const put_ticket = data => {
  return async dispatch => {
    try {
      const response = await put(`tickets/${data.id}`, data)
      const json = await response.json()
      dispatch(update_ticket(json.data))
    } catch (e) {
      console.log(e)
    }
  }
}

export const pay_ticket = data => {
  return async dispatch => {
    try {
      const response = await put(`payments/${data.ticket_id}`, data)
      const json = await response.json()
      dispatch(update_ticket(json.data))
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

export const update_ticket = new_state => {
  return {
    type: UPDATE_TICKET,
    new_state
  }
}
