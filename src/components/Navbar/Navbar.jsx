import React from 'react'

import './Navbar.css';

const Navbar = () => {
  return (
<nav className='nav-container'>
    <div className='logo'>
MEDIFLY
    </div>
    <div className='nav-items'>
<ul >
    <li>home</li>
    <li>medical facilities</li>
    <li>doctors</li>
    <button className="btn draw-border">Book</button>
</ul>
    </div>
</nav>
    
  )
}

export default Navbar