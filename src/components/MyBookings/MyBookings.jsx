import React from "react";
import "./MyBookings.css";
import HospitalIcon from "../../assets/icons/hospital.png";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineFileUnknown } from "react-icons/ai";

const MyBookings = ({ bookingDetails }) => {
  return (
    <div className="myBooking-container">
      <div className="myBookingHead-wrapper">
        <h3 className="myBooking-head">My Bookings</h3>
      </div>
{bookingDetails.length === 0 ? (
 <div className="no-data-found">
  
  <h3>No bookings available</h3>
 </div>
 
 ) :(bookingDetails?.map((booking, idx) => {
        return (
          <div className="myBooking-box" key={booking.idx + 1}>
            <div className="myBooking-content">
              <div className="center-img">
                <img
                  src={HospitalIcon}
                  alt="hospital icon"
                  width={40}
                  height={40}
                />
              </div>

              <div className="mybooking-details">
                <div className="myBooking-specifics">
                  <div className="myBooking-name">{booking.hospitalName}</div>

                  <div className="myBooking-time">{booking.timeSlot}</div>
                  <div className="myBooking-date">{booking.date}</div>
                </div>

                <div className="rating">
                  <AiFillLike />
                  <span>{booking.ratings}</span>
                </div>
              </div>
            </div>
          </div>
        );
      }))}


     
    </div>
  );
};

export default MyBookings;
