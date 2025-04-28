import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className="main">
      <div className="title"><img src="./images/flight-icon.png" alt="" /><Link style={{ textDecoration: 'none', color: 'inherit'  }} to="/Home">TravelGo</Link>
      </div>
      <ul className='nav'>
        <NavLink style={{ textDecoration: 'none'}} to="/Home"><li>Home</li></NavLink>
        <NavLink style={{ textDecoration: 'none'}} to="/Gallery"><li>Gallery</li></NavLink>
        <NavLink style={{ textDecoration: 'none'}} to="/Services"><li>Services</li></NavLink>
        <NavLink style={{ textDecoration: 'none'}} to="/AboutUs"><li>AboutUs</li></NavLink>
      </ul>
    
    </div>
  )
}
export default Header