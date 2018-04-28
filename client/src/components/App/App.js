// App.js

import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { startup } from '../../actions/app.js'

import './App.scss'

//TODO remove
//import { hello } from 'common/utils.js'

class App extends React.Component {

  componentDidMount() {
    const { startup } = this.props
    startup()
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Route component={() => (
            <div className="app__test">
              <h1>hello, world!</h1>
            </div>
          )} 
          />
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
