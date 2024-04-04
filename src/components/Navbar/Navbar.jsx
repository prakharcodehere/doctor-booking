import React from 'react'
 

import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {



  return (
<nav className='nav-container'>
    <div className='logo'>
MEDIFLY
    </div>
    <div className='nav-items'>
<ul >
   <li><Link to="/" className='link'>Home</Link> </li>
   <li><Link to="/booking-page" className='link'>Bookings</Link> </li>
  
    <a href="#search">  
   <button className="btn draw-border" >Book</button></a>
</ul>
    </div>
</nav>
    
  )
}

export default Navbar