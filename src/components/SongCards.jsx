import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlayPause from './PlayPause'
import { Link } from 'react-router-dom'
import { playPause, setActiveSong } from '../redux'

function SongCards({song, activeSong, songs, i}) {

  const {isPlaying} = useSelector(state => state.songData)
  const dispatch = useDispatch()

  const handlePlay = () => {
    dispatch(setActiveSong({song, i}))
    dispatch(playPause(true))
  }
  const handlePause = () => {
    dispatch(playPause(false))
  }

  return ( 
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <div className='relative w-full h-56 group'>
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50
          group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70'
          : 'hidden'}`}
        >
          <PlayPause 
            song={song}
            handlePause={handlePause}
            handlePlay={handlePlay}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img src={song.images.coverart} alt='song_img' />
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>
          <Link>
            {song.title}
          </Link>
        </p>
        <p className='text-sm truncate text-gray-300 mt-1'>
          <Link>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SongCards