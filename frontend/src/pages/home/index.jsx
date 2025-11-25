
import './style.css'
import Header from '../../components/header'
import CountryList from '../countries-list'
import { useTheme } from '../../context/theme'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CountryDetails from '../country-details'
import AddCountry from '../add-country'

function Home() {
  const {theme} = useTheme()
  return (
    <main className={`home`}>
   
        <Header/>
        <div  className={`${theme=="light"?"light":"dark"} `}>

        <BrowserRouter>
        <Routes>
          <Route index element={<CountryList/>}/>
          <Route path='details/:countryId' element={<CountryDetails/>}/>
          <Route path='add-country' element={<AddCountry/>}/>
          
        </Routes>

        </BrowserRouter>

       
        </div>

    </main>
  )
}

export default Home

