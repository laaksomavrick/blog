// CreateTicketModal / CreateTicketModal.js

import React from 'react'
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/Menu/MenuItem'

import Modal from '../Modal/Modal.js'

import { set_create_modal } from '../../actions/ui.js'
import { create_ticket } from '../../actions/ticket.js'

import './CreateTicketModal.scss'

class CreateTicketModal extends React.Component {

  render() {

    const { open, close, submit } = this.props

    const rates = [
      {
        value: '0',
        label: 'All day'
      },
      {
        value: '1',
        label: '6 hours'
      },
      {
        value: '2',
        label: '3 hours'
      },
      {
        value: '3',
        label: '1 hour'
      }
    ]

    const default_state = { rate: '0' }

    return (
      <Modal
        open={open}
        close={close}
        submit={submit}
        default_state={default_state}
        title="Create Ticket"
        button="create"
      >
        <TextField
          name="rate"
          label="Ticket rate"
          select
          SelectProps={{
            native: true
          }}
        >
          {rates.map(rate => (
            <option key={rate.value} value={rate.value}>
              {rate.label}
            </option>
          ))}
        </TextField>
      </Modal>
    )

  }

}

const map_state_to_props = state => {
  return {
    open: state.ui.create_modal_open
  }
}

const map_dispatch_to_props = dispatch => {
  return {
    close: () => { dispatch(set_create_modal(false)) },
    submit: (data) => { dispatch(create_ticket(data)) }
  }
}

export default connect(map_state_to_props, map_dispatch_to_props)(CreateTicketModal)
