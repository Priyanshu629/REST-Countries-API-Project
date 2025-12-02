
import { Link, useParams } from 'react-router-dom'
import "./style.css"
import useGetCountryDetails from '../../hooks/useGetCountryDetails'

function CountryDetails() {
    const {countryId} = useParams()
    
    const details = useGetCountryDetails({countryId})

    const {name,flag,nativeName,population,region,subRegion,capital,currency,language,borderCountry}= details

    let defaultValue = "No Data Available"
   
  
        
  return (
    <div className='details-page'>
        <Link className='back' to={'/'}>Go Back</Link>

        <div className='details'>
        <img src={flag} alt={name} />
        
        <section className='sec-1'>
            <h2>{name}</h2>
            <p> <span>Native Name :</span> {nativeName || defaultValue}</p>
            <p><span>Population :</span> {population || defaultValue}</p>
            <p><span>Region : </span> {region || defaultValue}</p>
            <p><span>Sub Region :</span> {subRegion || defaultValue}</p>
            <p><span>Capital :</span> {capital || defaultValue}</p>
        </section>


        <section className='sec-2'>
        <p><span>Currencies :</span> {currency || defaultValue}</p>
         <p><span>Languages :</span> {language || defaultValue}</p>
        </section>

        <section className='sec-3'>
          <h4>Border countries</h4>
         {borderCountry}

        </section>
        </div>
    </div>
  )
}

export default CountryDetails