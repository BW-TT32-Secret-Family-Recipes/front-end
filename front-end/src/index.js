import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/stylesheets/style.css'
import App from './App'

render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
)
