// PayTicketModal / PayTicketModal.js

import React from 'react'
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField'

import Modal from '../Modal/Modal.js'

import { set_pay_modal } from '../../actions/ui.js'
import { pay_ticket } from '../../actions/ticket.js'

import './PayTicketModal.scss'

class PayTicketModal extends React.Component {

  render() {

    const { open, close, submit, unpaid } = this.props

    //TODO: bug here; would be solved with loading spinner
    const first_id = unpaid[0] ? unpaid[0].id : 1
    const default_state = { ticket_id: first_id, credit_card: null }

    return (
      <Modal
        open={open}
        close={close}
        submit={submit}
        default_state={default_state}
        title="Pay Ticket"
        button="pay"
      >
        <TextField
          name="ticket_id"
          label="Ticket"
          margin="normal"
          select
          SelectProps={{
            native: true
          }}
        >
          {unpaid.map(ticket => (
            <option key={ticket.id} value={ticket.id}>
              {ticket.id}
            </option>
          ))}
        </TextField>
        <TextField
          name="credit_card"
          label="Credit Card"
          placeholder="1111 2222 3333 4444"
          required
          margin="normal"
        >
        </TextField>
      </Modal>
    )

  }

}

const map_state_to_props = state => {
  return {
    open: state.ui.pay_modal_open,
    unpaid: state.tickets.filter(t => t.paid == 0)
  }
}

const map_dispatch_to_props = dispatch => {
  return {
    close: () => { dispatch(set_pay_modal(false)) },
    submit: (data) => { dispatch(pay_ticket(data)) }
  }
}

export default connect(map_state_to_props, map_dispatch_to_props)(PayTicketModal)
