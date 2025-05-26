import React from 'react'
import {FaMoon, FaSun} from 'react-icons/Fa'

import { useGlobalContext } from './Context'

const ThemeToggle = () => {
    const {toogleTrue, setToggleTrue, toggleChanger} = useGlobalContext()

  return (
    <div className='toggle-container '>
      <button className='toggle-icon' onClick={()=>{toggleChanger()}}>{toogleTrue?<FaMoon/>:<FaSun/>}</button>
    </div>
  )
}

export default ThemeToggle
