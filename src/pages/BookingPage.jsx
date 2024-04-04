import React from 'react'
import "./index.css"
import Navbar from '../components/Navbar/Navbar'
import MyBookings from '../components/MyBookings/MyBookings'


const BookingPage = ({bookingDetails}) => {
  return (
    <div className='mybooking-page'>
        <Navbar />
        <MyBookings bookingDetails={bookingDetails}/>
    </div>
  )
}

export default BookingPage