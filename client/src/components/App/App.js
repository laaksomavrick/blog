// App.js

import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.scss'

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <h1> Hello, world! </h1>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
