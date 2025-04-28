import React from 'react'
import Plane from '../landing-page/Plane'
import Banner from '../landing-page/Banner'
import Services from '../landing-page/Services'
import Aboutus from '../landing-page/Aboutus'
import Gallery from '../landing-page/Gallery'
import Footer from '../landing-page/Footer'

const Home = () => {
    return (
        <div>
            <Plane />
            <Banner />
            <Services />
            <Aboutus />
            <Gallery />
            {/* <Footer /> */}

        </div>
    )
}

export default Home