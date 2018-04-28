// reducers/reducers.js

import { combineReducers } from 'redux'
import tickets from './ticket.js'

const root_reducer = combineReducers({
  tickets
})

export default root_reducer
