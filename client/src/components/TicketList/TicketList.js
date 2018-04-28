// components/TicketList/TicketList.js

import React from 'react'
import PropTypes from 'prop-types'

import List from 'material-ui/List'

import TicketListItem from '../TicketListItem/TicketListItem.js'

import './TicketList.scss'

const TicketList = ({ tickets }) => (
  <div className="ticket-list">
    <List>
      {
        tickets.map((ticket, index) => 
          <TicketListItem ticket={ticket} key={ticket.id} index={index} />
        )
      }
    </List>
  </div>
)

TicketList.propTypes = {
  tickets: PropTypes.array.isRequired
}

export default TicketList

