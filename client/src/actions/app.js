// actions/app.js

import { get_tickets } from './ticket.js'

export const startup = () => {
  return dispatch => {
    return Promise.all([
      dispatch(get_tickets())
    ])
  }
}
