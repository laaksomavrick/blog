// components/Tickets/Tickets.js

import React from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'

import TicketList from '../TicketList/TicketList.js'
import TicketListHeader from '../TicketListHeader/TicketListHeader.js'

import './Tickets.scss'

class Tickets extends React.Component {

  render() {

    const { tickets } = this.props

    return (
      <div className="tickets">
        <Paper>
          <TicketListHeader title="Tickets"/>
          <TicketList tickets={tickets} />
        </Paper>
      </div>
    )

  }

}

const map_state_to_props = state => {
  return {
    tickets: state.tickets
  }
}

export default connect(map_state_to_props)(Tickets)
