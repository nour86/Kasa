import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/index.jsx'
import './index.css'
import { Home } from './pages/Home/index.jsx'
import { Housing } from './pages/Housing/index.jsx'
import { About } from './pages/About/index.jsx'
import { Error } from './pages/Error/index.jsx'
import MainContainer from './components/MainContainer/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header />
            <MainContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/housing/:houseId" element={<Housing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </MainContainer>
        </Router>
    </React.StrictMode>
)
