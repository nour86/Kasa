import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/index.jsx'
import './index.css'
import { Home } from './pages/Home/index.jsx'
import { Housing } from './pages/Housing/index.jsx'
import { About } from './pages/About/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Housing" element={<Housing />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
