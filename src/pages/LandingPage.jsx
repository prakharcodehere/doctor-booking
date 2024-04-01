import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Search from '../components/Search/Search'
import "./landingPage.css"

const LandingPage = () => {
  return (
    <div className='landingpageWrapper'>
        <Navbar/>
        <Header/>
         <Search />
    </div>
  )
}

export default LandingPage