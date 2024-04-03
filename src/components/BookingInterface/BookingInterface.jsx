import React, { useState } from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import "./BookingInterface.css"
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



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
  

  const theme = useTheme();
const navigate = useNavigate(); 


  const handleTimeSlotSelection = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  // const handleBookAppointment = (appointmentDetails) => {
  //   console.log(`Appointment booked for ${selectedDate} at ${selectedTimeSlot} with ${medicalCenter["Hospital Name"]}`);
  //   setBookingDetails(prevBookingDetails => [...prevBookingDetails, appointmentDetails]);
  // };

const handleBookAppointment = () => {
  if (selectedDate && selectedTimeSlot && medicalCenter) {
    const appointmentDetails = {
      hospitalName: medicalCenter["Hospital Name"],
      date: selectedDate,
      timeSlot: selectedTimeSlot
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


  const timeSlots = {
    morning: ['10:45 AM'],
    afternoon: ['1:00 PM', '2:35 PM'],
    evening: ['4:45 PM', '5:25 PM'],
  };

  return (
    <div className="booking-interface">
    <h2>Book Appointment</h2>
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
        >
          {dates.map((date, index) => (
            <Tab label={date} key={date} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={(index) => setValue(index)}
      >
        {dates.map((date, index) => (
          <TabPanel value={value} index={index} dir={theme.direction} key={date}>
            <div className="time-slots">
              {timeSlots[date].map((timeSlot, timeIndex) => (
                <button
                  key={timeIndex}
                  onClick={() => handleTimeSlotSelection(timeSlot)}
                  className={selectedTimeSlot === timeSlot ? 'selected-time-btn' : 'time-btn'}
                >
                  {timeSlot}
                </button>
              ))}
            </div>
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
    <button onClick={handleBookAppointment} className='confirm-btn'>Confirm</button>
  </div>
  );
};

export default BookingInterface;
