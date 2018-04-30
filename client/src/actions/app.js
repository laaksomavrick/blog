// actions/app.js

import { get_tickets } from './ticket.js'
import { set_loading } from './ui.js'

export const startup = () => {
  return async (dispatch) => {
    await Promise.all([
      dispatch(get_tickets())
    ])
    dispatch(set_loading(false))
  }
}
