import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'

import App from './App'

ReactDOM.render(
    <div className='d-flex w-100 h-100'>
        <Router>
            <App />
        </Router>
    </div>,
    document.querySelector('#root')
)