import React, { useEffect, useState } from 'react'

function useGetRegions() {
 const [regions , setRegions] = useState([])

      async function getRegions(){

          try {
                let response = await fetch("https://restcountries.com/v3.1/independent?status=true&fields=region")
              let data = await response.json()
              let result = [...new Set(data.map(d=>d.region))]
              setRegions(result)
               
          } catch (error) {
               console.log(error.message)
          }
             
             }
     
             useEffect(()=>{
              getRegions()
         },[])

         return regions
}

export default useGetRegions