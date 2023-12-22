import React, {useEffect} from 'react'
import {
  Header,
  SongCards,
  Loader,
  Error
} from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSongs } from '../redux'

function Discover() {
  const dispatch = useDispatch()
  const {loading, error, songs, activeSong} = useSelector((state) =>  state.songData)
  
  useEffect(()=> {
    dispatch(fetchSongs())
  },[])
  
  if(loading) return <Loader title="Loading songs..." />
  if(error) return <Error />
  return (
    <div>
      <Header />
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {songs?.map((song, i) => (
          <SongCards 
           key={song.key}
           song={song}
           activeSong={activeSong}
           songs={songs}
           i={i}
          />
        ))
        }
      </div>
    </div>
  )
}

export default Discover