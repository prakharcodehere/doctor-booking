import React, { useEffect, useState } from "react";
import { getStates, getCities } from "../../api/index";
import { Navigate, useNavigate } from "react-router-dom";
import "./Search.css"

const Search = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStates() {
      const response = await getStates();
      setStates(response);
      console.log(response)
    }

    fetchStates();
  }, []);

  useEffect(() => {
    async function fetchCities() {
      if (selectedState !== "") {
        const response = await getCities(selectedState);
        setCities(response);
      }
    }

    fetchCities();
  }, [selectedState]);

  function handleSearch() {
    navigate(`/search/${selectedState}/${selectedCity}`);
  }

  return (
    <div className="search-container">
      <div className="input-container"> 
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
           className="select"
        
        >
          <option value="">Select state</option>
          {states.map((state) => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            );
          })}
        </select>

        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="select"
        >
          <option value="">Select city</option>
          {cities.map((city) => {
            return (
              <option
                key={city}
                value={city}
                onChange={(e) => selectedCity(e.target.value)}
              >
                {city}
              </option>
            );
          })}
        </select>
        <button className="button" onClick={handleSearch}>
  <span className="button-content">Search </span>
</button>
      </div>
    </div>
  );
};

export default Search;
