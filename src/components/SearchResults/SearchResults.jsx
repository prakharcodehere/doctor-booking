import React, { useEffect, useState } from 'react'
import "./SearchResults.css"
import { useParams } from 'react-router-dom';
import { getMedicalCenters } from '../../api/index';

const SearchResults = () => {

    const { state, city } = useParams();
    const [medicalCenters, setMedicalCenters] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchMedicalCenters() {
        const response = await getMedicalCenters(state, city);
        setMedicalCenters(response);
        console.log(response)
        setLoading(false);
      }
  
      fetchMedicalCenters();
    }, [state, city]);
  
    if (loading) {
      return <div>Loading...</div>;
    }

    
    const medicalcenterNumber =  medicalCenters.length 
  return (
    <div className='result-container'>
        <div className='heading-search'>{medicalcenterNumber} medical centers found in the {city}, {state} region </div>
{medicalCenters.map((center, idx) => (
<div className='result-box' key={idx}>
<div className='center-img'>

</div>
<div className='center-details'>
<h4></h4>
</div>


</div>


))}



    </div>
  )
}

export default SearchResults