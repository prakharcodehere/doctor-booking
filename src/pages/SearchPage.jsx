import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SearchResults from '../components/SearchResults/SearchResults'
import "./index.css";

const SearchPage = ({setBookingDetails}) => {
  return (
    <div className='searchResult-page'>
 <Navbar/>
<SearchResults setBookingDetails={setBookingDetails}/>
    </div>
  )
}

export default SearchPage