import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import RootReducer from './reducers/reducers'
import App from './components/App/App.js'

export const store = createStore(
  RootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, 
  document.getElementById('root')
)
