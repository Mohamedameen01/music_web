import React, { useEffect } from 'react'
import { fetchSongs } from '../redux'
import { useDispatch } from 'react-redux'

function SongCards() {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchSongs())
  },[])

  return (
    <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
      {[1,2,3,4,5,6,7,8,9,10].map(song =>(
        <p className='text-white'>Song Card</p>
      ))}
    </div>
  )
}

export default SongCards