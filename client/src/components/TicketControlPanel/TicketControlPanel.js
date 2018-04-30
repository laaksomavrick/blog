// components/TicketControlPanel/TicketControlPanel.js

import React from 'react'
import { connect } from 'react-redux'

import Button from 'material-ui/Button'

import {
  set_create_modal,
  set_pay_modal,
  set_leave_modal
} from '../../actions/ui.js'

import { spots_available } from 'common/utils'

import './TicketControlPanel.scss'

class TicketControlPanel extends React.Component {

  handle_click = (e) => {
    const { open_create_modal, open_pay_modal, open_leave_modal } = this.props
    const modal = e.currentTarget.name
    switch (modal) {
      case "create":
        open_create_modal()
        break
      case "pay":
        open_pay_modal()
        break
      case "leave":
        open_leave_modal()
        break
      default:
        return
    }
  }

  render() {

    const { create_enabled, pay_enabled, leave_enabled } = this.props

    const className = "ticket-control-panel"

    return (
      <div className={className}>
        <Button disabled={!create_enabled} name="create" onClick={this.handle_click}>
          Create
        </Button>
        <Button disabled={!pay_enabled} name="pay" onClick={this.handle_click}>
          Pay
        </Button>
        <Button disabled={!leave_enabled} name="leave" onClick={this.handle_click}>
          Leave
        </Button>
      </div>
    )

  }

}

const map_dispatch_to_props = dispatch => {
  return {
    open_create_modal: () => { dispatch(set_create_modal(true)) },
    open_pay_modal: () => { dispatch(set_pay_modal(true)) },
    open_leave_modal: () => { dispatch(set_leave_modal(true)) }
  }
}

const map_state_to_props = state => {
  return {
    leave_enabled: state.tickets.filter(t => t.paid == 1 && t.active == 1).length > 0,
    pay_enabled: state.tickets.filter(t => t.paid == 0).length > 0,
    create_enabled: state.tickets.length < spots_available()
  }
}

export default connect(map_state_to_props, map_dispatch_to_props)(TicketControlPanel)
