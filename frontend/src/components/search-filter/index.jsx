
import { useRef } from "react"
import { useSearchFilter } from "../../context/search-filter"
import {Link} from "react-router-dom"
import "./style.css"

function SearchFilter() {
  const {setSearchText,regions,setRegion,searchText,region} = useSearchFilter()
  
 
  return (
    <div className='search-filter'>
       
         <div>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} type="search" placeholder='Search for the country' />
        </div>
        < Link to={'/add-country'} className="border-2 p-2 rounded-md cursor-pointer bg-green-500 hover:bg-green-400">Add Country +</Link>
          <select value={region}  onChange={(e)=>setRegion(e.target.value)}>
            <option value="all">Filter By Region</option>
            {
              regions?.map(r=> <option key={r} value={r}>{r}</option>)
            }
            
          </select>

    </div>
  )
}

export default SearchFilter