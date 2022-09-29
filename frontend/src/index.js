import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App'

ReactDOM.render(
    <div className='d-flex' 
        style={/*Mudar cor de fundo */
        {
            width: '480px', 
            height: '800px'
        }}>
        <Router>
            <App/>
        </Router>
    </div>,
    document.querySelector('#root')
)