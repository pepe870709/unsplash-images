import React from 'react'
import { useGlobalContext } from "./Context";
import { useFetchData, useEffectData } from './customHooks';
import Picture from './Picture';
import { QueryClient } from '@tanstack/react-query';

const Gallery = () => {

    const {topic} = useGlobalContext()

    const {data, isLoading, isError} = useFetchData({topic})

    const {data2, error, loading} = useEffectData(`/search/collections?per_page=20 &query=${topic}`)

    console.log(data2)


  if (isError) {
  return (
        <div className='image-container'>
          <h2>There was an error...</h2>
        </div>
    )  
  }

  if (isLoading) {
  return (
        <div className='image-container'>
          <h2>Loading...</h2>
        </div>
    )  
  }

  if (topic && !data?.results.length) {
  return (
        <div className='image-container'>
          <h2>No Results Found...</h2>
        </div>
    )  
  }

  return (
    <div className='image-container'>
      {
        data?.results.map((e) => { 
            const url = e.cover_photo.urls.regular
            const id = e.id
            const descript = e.cover_photo.alt_description
            return (
                <Picture key={id} url={url} descript={descript}/>
            )
        })
      }
    </div>
  )
}

export default Gallery
