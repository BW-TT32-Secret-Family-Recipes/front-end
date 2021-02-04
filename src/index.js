import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/stylesheets/style.css'
import App from './App'
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';

const store = createStore(reducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.querySelector('#root')
)
