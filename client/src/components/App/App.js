// App.js

import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Fade from 'material-ui/transitions/Fade'

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

    const { loading } = this.props

    const element = loading === false ? (
      <>
        <Router>
          <Route component={Tickets} />
        </Router>
        <CreateTicketModal />
        <PayTicketModal />
        <LeaveModal />
      </>
    ) : (
      <Fade in={true}>
        <div className="app__loading">
        </div>
      </Fade>
    )

    return (
      <div className="app">
        {element}
      </div>
    )
  }

}

const map_dispatch_to_props = dispatch => {
  return {
    startup: () => { dispatch(startup()) }
  }
}

const map_state_to_props = state => {
  return {
    loading: state.ui.loading
  }
}

export default connect(map_state_to_props, map_dispatch_to_props)(App)
