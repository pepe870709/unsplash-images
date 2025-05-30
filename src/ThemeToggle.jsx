import React from 'react'
import {FaMoon} from 'react-icons/fa'
import {FaSun} from 'react-icons/fa'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
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
