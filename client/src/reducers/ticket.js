// reducers/ticket.js

import {
  SET_TICKETS,
  ADD_TICKET
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
    default:
      return state
  }
}

export default tickets
