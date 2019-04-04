import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Beeport from './components/Beeport'
import * as serviceWorker from './serviceWorker';
import './index.css'

ReactDOM.render(
    <Router>
        <Beeport />
    </Router>
    , document.getElementById('root'))

serviceWorker.unregister();