import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Blog from './components/Blog/Blog.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

ReactDOM.render(
  <Router>
    <Blog />
  </Router>,
  document.getElementById('root')
)