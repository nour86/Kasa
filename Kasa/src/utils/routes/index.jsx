// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/Home/index.jsx'
import { Housing } from '../../pages/Housing/index.jsx'
import { About } from '../../pages/About/index.jsx'
import { Error } from '../../pages/Error/index.jsx'

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/housing/:houseId" element={<Housing />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}
