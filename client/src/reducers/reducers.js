// reducers/reducers.js

import { combineReducers } from 'redux'
import tickets from './ticket.js'
import ui from './ui.js'

const root_reducer = combineReducers({
  tickets,
  ui
})

export default root_reducer
