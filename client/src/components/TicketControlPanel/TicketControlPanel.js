// components/TicketControlPanel/TicketControlPanel.js

import React from 'react'
import { connect } from 'react-redux'

import Button from 'material-ui/Button'

import {
  set_create_modal,
  set_pay_modal,
  set_leave_modal
} from '../../actions/ui.js'

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

    //TODO: DISABLE INPUTS FOR PARTICULAR STATES
    const className = "ticket-control-panel"

    return (
      <div className={className}>
        <Button name="create" onClick={this.handle_click}>
          Create
        </Button>
        <Button name="pay" onClick={this.handle_click}>
          Pay
        </Button>
        <Button name="leave" onClick={this.handle_click}>
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

export default connect(null, map_dispatch_to_props)(TicketControlPanel)
