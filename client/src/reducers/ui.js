// reducers/ui.js

import {
  SET_CREATE_MODAL,
  SET_PAY_MODAL,
  SET_LEAVE_MODAL,
  SET_LOADING
} from '../constants/constants.js'

const ui = (
  state = {
    create_modal_open: false,
    pay_modal_open: false,
    leave_modal_open: false,
    loading: true
  },
  action
) => {
  switch (action.type) {
    case SET_CREATE_MODAL:
      return Object.assign({}, state, {
        create_modal_open: action.new_state
      })
    case SET_PAY_MODAL:
      return Object.assign({}, state, {
        pay_modal_open: action.new_state
      })
    case SET_LEAVE_MODAL:
      return Object.assign({}, state, {
        leave_modal_open: action.new_state
      })
    case SET_LOADING:
      return Object.assign({}, state, {
        loading: action.new_state
      })
    default:
      return state
  }
}

export default ui
