import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SearchResults from '../components/SearchResults/SearchResults'
import "./index.css";

const SearchPage = () => {
  return (
    <div className='searchResult-page'>
 <Navbar/>
<SearchResults/>
    </div>
  )
}

export default SearchPage