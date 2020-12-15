import React from 'react'
import ReactDOM, {render} from 'react-dom'
import PropTypes from 'prop-types'
import App from '../components/App'


document.addEventListener("DOMContentLoaded", () => {
  render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});