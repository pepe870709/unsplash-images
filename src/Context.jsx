import React from 'react'
import { createContext, useContext, useState } from 'react'

const AppContext =  createContext()

const Context = ({children}) => {

const [toogleTrue, setToggleTrue] = useState(false)
const [topic, setTopic] = useState('')



const toggleChanger = () => {
  
  const pp = document.querySelector('#box')

  pp.classList.toggle('main-wrapper-white', toogleTrue)
  pp.classList.toggle('main-wrapper-black', !toogleTrue)
  pp.classList.contains('box') || pp.classList.toggle('box')

  setToggleTrue(!toogleTrue)
}

  return (
    <AppContext.Provider value={{toogleTrue, setToggleTrue, topic, setTopic, toggleChanger}}>
      {children}
    </AppContext.Provider>
  )
}
export default Context

export const useGlobalContext = () => {
    return useContext(AppContext)
}