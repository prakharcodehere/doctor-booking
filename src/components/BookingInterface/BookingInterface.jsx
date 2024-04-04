import React, { useEffect, useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "./BookingInterface.css"
import { useNavigate} from 'react-router-dom';


const BookingInterface = ({ medicalCenter, setBookingDetails }) => {

  const [value, setValue] = useState(0)
  const [selectedDate, setSelectedDate] = useState(null);
  
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [dates, setDates] = useState([...Array(7)].map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index);
    return date.toISOString().slice(0, 10); 
  }));


  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedDate(dates[newValue]);  
  }
  

  
const navigate = useNavigate(); 
  const handleTimeSlotSelection = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  // const handleBookAppointment = (appointmentDetails) => {
  //   console.log(`Appointment booked for ${selectedDate} at ${selectedTimeSlot} with ${medicalCenter["Hospital Name"]}`);
  //   setBookingDetails(prevBookingDetails => [...prevBookingDetails, appointmentDetails]);
  // };

const handleBookAppointment = (event) => {
event.preventDefault()
  
  if (selectedDate && selectedTimeSlot && medicalCenter) {
    const appointmentDetails = {
      hospitalName: medicalCenter["Hospital Name"],
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      ratings:medicalCenter["Hospital overall rating"]

    };
    console.log(`Appointment booked for ${appointmentDetails.date} at ${appointmentDetails.timeSlot} with ${appointmentDetails.hospitalName}`);
    setBookingDetails(prevBookingDetails => [...prevBookingDetails, appointmentDetails]);
    console.log(appointmentDetails);
    alert("booking successful")
    navigate("/booking-page")
    
  } else {
    alert("Please select a date, time slot, and medical center");
  }
};


useEffect(() => {
  setSelectedDate(dates[value]); 
}, []); 

  const timeSlots = {
    morning: ['10:45 AM'],
    afternoon: ['1:00 PM', '2:35 PM'],
    evening: ['4:45 PM', '5:25 PM'],
  };

  return (
    <div className="booking-interface">
      <h2>Book Appointment</h2>
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
      >

        {dates.map((date) => (
 <Tab label={date} key={date} onClick={() => setSelectedDate(date)}/>
        ))}
   
      </Tabs>
    </Box>
    <div className="time-slots">
        <div className="morning">
        <div className='timing-head'> <h3 className='head'>Morning</h3></div>
          <div className="time-buttons">
            {timeSlots.morning.map(timeSlot => (
              <button key={timeSlot} onClick={() => handleTimeSlotSelection(timeSlot)} 
              className={selectedTimeSlot === timeSlot ? 'selected-time-btn' : 'time-btn'}>
                {timeSlot}
              </button>
            ))}
          </div>
        </div>
        <hr className='horizontal-rule'/>
        <div className="afternoon">
          <div className='timing-head'> <h3 className='head'>Afternoon</h3></div>
         
          <div className="time-buttons">
            {timeSlots.afternoon.map(timeSlot => (
              <button key={timeSlot} onClick={() => handleTimeSlotSelection(timeSlot)} 
              className={selectedTimeSlot === timeSlot ? 'selected-time-btn' : 'time-btn'}>
                {timeSlot}
              </button>
            ))}
          </div>
        </div>
        <hr className='horizontal-rule'/>
     
        <div className="evening">
        <div className='timing-head'> <h3 className='head' >Evening</h3></div>
          <div className="time-buttons">
            {timeSlots.evening.map(timeSlot => (
              <button key={timeSlot} onClick={() => handleTimeSlotSelection(timeSlot)} 
              className={selectedTimeSlot === timeSlot ? 'selected-time-btn' : 'time-btn'}
              >
                {timeSlot}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleBookAppointment} className='confirm-btn'>Confirm </button>
    </div>
  );
};

export default BookingInterface;
