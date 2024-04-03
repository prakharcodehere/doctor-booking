import React, { useEffect, useState } from "react";
import "./SearchResults.css";
import { useParams } from "react-router-dom";
import { getMedicalCenters } from "../../api/index";
import HospitalIcon from "../../assets/icons/hospital.png";
import { AiFillLike } from "react-icons/ai";
import BookingInterface from "../BookingInterface/BookingInterface";

const SearchResults = ({setBookingDetails}) => {
  const { state, city } = useParams();
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBookingInterface, setShowBookingInterface] = useState(false);
  const [selectedMedicalCenter, setSelectedMedicalCenter] = useState(null);

  useEffect(() => {
    async function fetchMedicalCenters() {
      const response = await getMedicalCenters(state, city);
      setMedicalCenters(response);
      console.log(response);
      setLoading(false);
    }

    fetchMedicalCenters();
  }, [state, city]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleBookAppointment = (medicalCenter) => {
    setShowBookingInterface(true);
    setSelectedMedicalCenter(medicalCenter);
  };

  const medicalcenterNumber = medicalCenters.length;
  return (
    <div className="result-container">
      <div className="heading-search">
        {medicalcenterNumber} medical centers found in the {city}, {state}{" "}
        region{" "}
      </div>
      {medicalCenters.map((center, idx) => (
       
          <div className="result-box" key={idx}>
          <div className="result-content">


         
            <div className="center-img">
              <img
                src={HospitalIcon}
                alt="hospital icon"
                width={40}
                height={40}
              />
            </div>
            <div className="center-details">
              <span className="center-name">{center["Hospital Name"]}</span>
              <span className="center-address">{center.Address}</span>
              <span className="center-location">
                {center.City}, {center.State}, {center["ZIP Code"]}
              </span>
              <div className="rating">
                <AiFillLike />
                <span>{center["Hospital overall rating"]}</span>
              </div>
            </div>

            <div className="btn-wrapper">
              <span className="heading-btn">Available today</span>
              <button className="book-btn"  onClick={() => handleBookAppointment(center)}>
                Book
              </button>
            </div>
            </div>
            <div className="schedule-appointment">
            {showBookingInterface && <BookingInterface   medicalCenter={selectedMedicalCenter}
                setBookingDetails={setBookingDetails}/>}
            </div>
          
          </div>
      
      ))}
    </div>
  );
};

export default SearchResults;
