import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className="main">
      <div className="title"><img src="./images/flight-icon.png" alt="" /><Link style={{ textDecoration: 'none', color: 'inherit'  }} to="/Home">TravelGo</Link>
      </div>
      <ul className='nav'>
        <Link style={{ textDecoration: 'none', color: 'inherit'  }} to="/Home"><li>Home</li></Link>
        <Link style={{ textDecoration: 'none' , color: 'inherit' }} to="/Gallery"><li>Gallery</li></Link>
        <Link style={{ textDecoration: 'none', color: 'inherit'  }} to="/Services"><li>Services</li></Link>
        <Link style={{ textDecoration: 'none' , color: 'inherit' }} to="/AboutUs"><li>AboutUs</li></Link>
      </ul>
    </div>
  )
}
export default Header