// components/TicketListItem/TicketListItem.js

import React from 'react'
import PropTypes from 'prop-types'

import Divider from 'material-ui/Divider'
import { ListItem, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'

import './TicketListItem.scss'

const TicketListDivider = ({ index }) => {
  if (index !== 0) {
    return <Divider inset />
  }
  return null
} 

const TicketListItem = ({ ticket, index }) => (
  <div className="ticket-list-item">
    <TicketListDivider index={index} />
    <ListItem
      key={ticket.id}
      button
    >
      <Checkbox
        tabIndex={-1}
      />
      <ListItemText
        primary={ticket.name}
      />
    </ListItem>
  </div>
)

TicketListItem.propTypes = {
  ticket: PropTypes.object.isRequired
}

export default TicketListItem
