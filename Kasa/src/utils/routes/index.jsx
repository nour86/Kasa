// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../../pages/Home/index.jsx'
import { Housing } from '../../pages/Housing/index.jsx'
import { About } from '../../pages/About/index.jsx'
import { Error } from '../../pages/Error/index.jsx'

// const createRoutes = () => (
//     <Router>
//       <Route exact path="/sessionstate1" component={Template1}/>
//       <Route exact path="/sessionstate2" component={Template2}/>
//       <Route exact path="/sessionstate3" component={Template3}/>
//     </Router>
// );

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/housing/:houseId" element={<Housing />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    )
}
