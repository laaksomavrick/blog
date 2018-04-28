import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import RootReducer from './reducers/reducers'
import App from './components/App/App.js'

export const store = createStore(
  RootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
)

const theme = createMuiTheme()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>, 
  document.getElementById('root')
)
