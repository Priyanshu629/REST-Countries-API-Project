import React, { useEffect, useState } from 'react'

function useGetAllCountries(setFilteredCountries) {
 const [countries,setCountries]= useState([])  

 async function getAllCountries(){

     try {
           let response = await fetch("http://localhost:4000/api/country/get-countries")
            let data = await response.json()
            setCountries(data.countries)
            setFilteredCountries(data.countries)
          
     } catch (error) {
          console.log(error.message)
     }
    
           
        }

        useEffect(()=>{
             getAllCountries()
        },[])
return {countries,getAllCountries}
  
}

export default useGetAllCountries