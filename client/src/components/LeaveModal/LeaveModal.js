// LeaveModal / LeaveModal.js

import React from 'react'
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField'

import Modal from '../Modal/Modal.js'

import { set_leave_modal } from '../../actions/ui.js'
import { put_ticket } from '../../actions/ticket.js'

import './LeaveModal.scss'

class LeaveModal extends React.Component {

  render() {

    const { open, close, submit, leavable } = this.props

    //TODO bug; loading spinner
    const first_id = leavable[0] ? leavable[0].id : null
    const default_state = { id: first_id, active: 0 }

    return (
      <Modal
        open={open}
        close={close}
        submit={submit}
        default_state={default_state}
        title="Leave"
        button="leave"
      >
        <TextField
          name="id"
          label="Ticket"
          margin="normal"
          select
          SelectProps={{
            native: true
          }}
        >
          {leavable.map(ticket => (
            <option key={ticket.id} value={ticket.id}>
              {ticket.id}
            </option>
          ))}
        </TextField>
      </Modal>
    )

  }

}

const map_state_to_props = state => {
  return {
    open: state.ui.leave_modal_open,
    leavable: state.tickets.filter(t => t.paid == 1 && t.active == 1)
  }
}

const map_dispatch_to_props = dispatch => {
  return {
    close: () => { dispatch(set_leave_modal(false)) },
    submit: (data) => { dispatch(put_ticket(data)) }
  }
}

export default connect(map_state_to_props, map_dispatch_to_props)(LeaveModal)
