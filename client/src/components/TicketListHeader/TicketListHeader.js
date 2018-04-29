// components/TicketListHeader/TicketListHeader.js

import React from 'react'

import Typography from 'material-ui/Typography'

import './TicketListHeader.scss'

const TicketListHeader = ({ title }) => (
  <div className="ticket-list-header">
    <Typography className="ticket-list-header__name" variant="title">
      {title}
    </Typography>
  </div>
)

export default TicketListHeader
