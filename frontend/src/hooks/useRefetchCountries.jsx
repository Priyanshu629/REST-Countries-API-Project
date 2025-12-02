import { useEffect } from "react"
import { useSearchFilter } from "../context/search-filter"


function useRefetchCountries() {
const {setCountries,setFilteredCountries,setRegions}= useSearchFilter()

 async function reFetch(){

     try {
           let response = await fetch(`${import.meta.env.VITE_BASE_BACKEND_URL}/get-countries`)
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