import React from 'react'
import {FaMoon, FaSun} from 'react-icons/Fa'
import { useGlobalContext } from './Context'

const ThemeToggle = () => {
    const {toogleTrue, setToggleTrue, toggleChanger} = useGlobalContext()

  return (
    <div className='toggle-container '>
      <button className='toggle-icon' onClick={()=>{toggleChanger()}}>{toogleTrue?<p>M</p>:<p>S</p>}</button>
    </div>
  )
}

export default ThemeToggle
