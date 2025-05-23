import React from 'react'
import { useState } from 'react'
import authFetch from './Axios/Axios'
import { useQuery } from '@tanstack/react-query'
import { useFetchData } from './customHooks'
import { useGlobalContext } from './Context'

const SearchForm = () => {

    const [name, setName] = useState('')
    const {topic, setTopic} = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        setTopic(name)
        console.log(e.target.elements.search.value)
    }

  return (
    <div>
        
        <h1 className='title'>Unsplash Images</h1> 
        
        <form className='search-form' onSubmit={handleSubmit}>
            <input className='search-input' name='search' type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
            <button className='btn' type='submit'>Search</button>
        </form>
      
    </div>
  )
}

export default SearchForm
