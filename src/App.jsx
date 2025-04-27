import React from 'react'
import Header from './landing-page/Header'
import Banner from './landing-page/Banner'
import Services from './landing-page/Services'
import Aboutus from './landing-page/Aboutus'
import './App.css'
import Footer from './landing-page/Footer'
import Gallery from './landing-page/Gallery'
import Plane from './landing-page/Plane'



 const App = () => {
  
  return (
    <div>
    <Header />
    <Plane />
    <Banner />
    <Services />
    <Aboutus />
    <Gallery />
    <Footer />
    </div>
  )
}
export default App
