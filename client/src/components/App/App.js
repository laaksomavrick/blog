// App.js

import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { startup } from '../../actions/app.js'

import Tickets from '../Tickets/Tickets.js'
import CreateTicketModal from '../CreateTicketModal/CreateTicketModal.js'
import PayTicketModal from '../PayTicketModal/PayTicketModal.js'
import LeaveModal from '../LeaveModal/LeaveModal.js'

import './App.scss'

class App extends React.Component {

  componentDidMount() {
    const { startup } = this.props
    startup()
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Route component={Tickets} />
        </Router>
        <CreateTicketModal />
        <PayTicketModal />
        <LeaveModal />
      </div>
    )
  }

}

const map_dispatch_to_props = dispatch => {
  return {
    startup: () => { dispatch(startup()) }
  }
}

export default connect(null, map_dispatch_to_props)(App)
