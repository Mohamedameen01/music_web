import React, {useEffect} from 'react'
import Header from '../components/Header'
import SongCards from '../components/SongCards'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSongs } from '../redux'
import Loader from '../components/Loader'

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
        {songs?.map(song => (
          <SongCards 
           key={song.key}
           song={song}
           activeSong={activeSong}
          />
        ))
        }
      </div>
    </div>
  )
}

export default Discover