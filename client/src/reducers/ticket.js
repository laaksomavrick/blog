// reducers/ticket.js

import {
  SET_TICKETS,
  ADD_TICKET,
  UPDATE_TICKET
} from '../constants/constants.js'

const tickets = (
  state = [],
  action
) => {
  switch (action.type) {
    case SET_TICKETS:
      return Object.assign([], state, action.new_state)
    case ADD_TICKET:
      return Object.assign([], state, [...state, action.new_state])
    case UPDATE_TICKET:
      const filtered = state.filter(t => t.id !== action.new_state.id)
      return Object.assign([], state, [...filtered, action.new_state])
    default:
      return state
  }
}

export default tickets
