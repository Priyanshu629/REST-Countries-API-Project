import React, { useEffect, useState } from 'react'

function useGetCountryDetails({countryId}) {

    const [details,setDetails]=useState({})

      async function getCountryDetails(){

        try {
           let response = await fetch(`${import.meta.env.VITE_BASE_BACKEND_URL}/get-country/${countryId}`)
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