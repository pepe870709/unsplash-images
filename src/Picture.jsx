import React from 'react'
import { useState, useEffect } from 'react'

const Picture = ({url, descript}) => {
    const [enlarged, setEnlarged] = useState(false)

  return (
    <div>
      <img className='img' src={url} title={descript} alt={descript} onClick={() => {setEnlarged(!enlarged)}}/>
      <img className={enlarged ? 'enlarged-image': 'img-off'} src={url} title={descript} alt={descript}/>
      <div className={enlarged ? 'squared' : 'img-off'} onClick={() => {setEnlarged(!enlarged)}}></div>
    </div>
  )
}

export default Picture
