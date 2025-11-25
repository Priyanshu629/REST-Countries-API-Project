import React, { useEffect, useState } from 'react'

function useGetCountryDetails({countryId}) {

    const [details,setDetails]=useState({})

      async function getCountryDetails(){

        try {
           let response = await fetch(`http://localhost:4000/api/country/get-country/${countryId}`)
         let details = await response.json()
         
          setDetails(details.country)
        } catch (error) {
           console.log(error.message)
        }
        
        }

        useEffect(()=>{
             getCountryDetails()    
        },[countryId])

  return details
}

export default useGetCountryDetails