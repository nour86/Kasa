import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './utils/fonts/Montserrat/Montserrat-Regular.ttf'

import { App } from './utils/routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
