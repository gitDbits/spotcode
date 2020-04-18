import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../app';

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('root'),
  )
})
