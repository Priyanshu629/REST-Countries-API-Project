import React, { useEffect, useState } from 'react'

function useGetAllCountries(setFilteredCountries,setCountries) {
  
 const [regions , setRegions] = useState([])

 async function getAllCountries(){

     try {
           let response = await fetch(`${import.meta.env.VITE_BASE_BACKEND_URL}/get-countries`)
            let data = await response.json()
            setCountries(data.countries)
            setFilteredCountries(data.countries)
            setRegions(data?.regions)
          
     } catch (error) {
          console.log(error.message)
     }
    
           
        }

        useEffect(()=>{
             getAllCountries()
        },[])
// return {getAllCountries,regions}
  
}

export default useGetAllCountries