// components/Tickets/Tickets.js

import React from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'

import TicketList from '../TicketList/TicketList.js'
import TicketListHeader from '../TicketListHeader/TicketListHeader.js'
import TicketListSubheader from '../TicketListSubheader/TicketListSubheader.js'
import TicketControlPanel from '../TicketControlPanel/TicketControlPanel.js'

import { spots_available } from 'common/utils.js'

import './Tickets.scss'

class Tickets extends React.Component {

  render() {

    const { tickets, current, total } = this.props

    return (
      <div className="tickets">
        <Paper>
          <TicketListHeader title="Ticket History"/>
          <TicketListSubheader current={current} total={total}/>
          <TicketList tickets={tickets} />
          <TicketControlPanel />
        </Paper>
      </div>
    )

  }

}

const map_state_to_props = state => {
  return {
    tickets: state.tickets.sort((a, b) => b.id < a.id),
    current: state.tickets.filter(t => t.active == true).length,
    total: spots_available()
  }
}

export default connect(map_state_to_props)(Tickets)
