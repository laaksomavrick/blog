// actions/ui.js

import {
  SET_CREATE_MODAL,
  SET_PAY_MODAL,
  SET_LEAVE_MODAL
} from '../constants/constants.js'

export const set_create_modal = new_state => {
  return {
    type: SET_CREATE_MODAL,
    new_state
  }
}

export const set_pay_modal = new_state => {
  return {
    type: SET_PAY_MODAL,
    new_state
  }
}

export const set_leave_modal = new_state => {
  return {
    type: SET_LEAVE_MODAL,
    new_state
  }
}
