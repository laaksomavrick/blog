// App.js

import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { startup } from '../../actions/app.js'

import Tickets from '../Tickets/Tickets.js'

import './App.scss'

class App extends React.Component {

  componentDidMount() {
    const { startup } = this.props
    startup()
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route component={Tickets} />
        </div>
      </Router>
    )
  }

}

const map_dispatch_to_props = dispatch => {
  return {
    startup: () => { dispatch(startup()) }
  }
}

export default connect(null, map_dispatch_to_props)(App)
