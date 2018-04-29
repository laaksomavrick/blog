// components/TicketListSubheader/TicketListSubheader.js

import React from 'react'

import Typography from 'material-ui/Typography'

import './TicketListSubheader.scss'

const TicketListSubsubheader = ({ current, total }) => (
  <div className="ticket-list-subheader">
    <Typography className="ticket-list-subheader__count" variant="subheading">
      {`${current} / ${total}`}
    </Typography>
  </div>
)

export default TicketListSubsubheader
