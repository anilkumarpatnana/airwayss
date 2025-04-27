import React from 'react'
import Header from './landing-page/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './navigation-pages/Home'
import Gallery from './navigation-pages/Gallery'
import Services from './navigation-pages/Services'
import AboutUs from './navigation-pages/AboutUs'


const App = () => {

  return (
    <div>
      <div className="navbar-container">
        <Header /> {/* This stays fixed during route changes */}
      </div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />

      </Routes>
    </div>
  )
}
export default App
