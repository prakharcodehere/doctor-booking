import React from 'react'
import "./index.css"
import Navbar from '../components/Navbar/Navbar'
import MyBookings from '../components/MyBookings/MyBookings'

const BookingPage = () => {
  return (
    <div>
        <Navbar/>
        <MyBookings/>
    </div>
  )
}

export default BookingPage