import React from 'react'
import { Link } from 'react-router-dom';
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
    <button class="btn draw-border">Draw Border</button>
</ul>
    </div>
</nav>
    
  )
}

export default Navbar