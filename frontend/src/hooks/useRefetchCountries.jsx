import { useEffect } from "react"
import { useSearchFilter } from "../context/search-filter"


function useRefetchCountries() {
const {setCountries,setFilteredCountries,setRegions}= useSearchFilter()

 async function reFetch(){

     try {
           let response = await fetch("http://localhost:4000/api/country/get-countries")
            let data = await response.json()
            setCountries(data.countries)
            setFilteredCountries(data.countries)
            setRegions(data.regions)

            
          
     } catch (error) {
          console.log(error.message)
     }
    
           
        }

        useEffect(()=>{
             reFetch()
        },[])

    return reFetch
}

export default useRefetchCountries