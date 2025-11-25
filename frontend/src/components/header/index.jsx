import React from 'react'
import './style.css'
import { useTheme } from '../../context/theme'

function Header() {
  const {setTheme,theme} = useTheme()
  return (
    <header>

        <h3>Where in the world ?</h3>

       
       {theme=="light"?<button onClick={()=>setTheme("dark")} className='theme-btn'><i className="fa-regular fa-moon"></i>
        <span>Dark Mode</span></button>:<button onClick={()=>setTheme("light")}   className='theme-btn'><i className="fa-regular fa-sun"></i>
        <span>Light Mode</span></button>} 
      



    </header>
  )
}

export default Header