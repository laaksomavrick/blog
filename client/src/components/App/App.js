// App.js

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import './App.scss'

import { hello } from 'common/utils.js'

export default class App extends React.Component {

  componentDidMount() {
    hello()
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
