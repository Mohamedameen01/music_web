import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Track from './Track'
import { playNextSong, playPause, playPrevSong } from '../../redux'
import Controls from './Controls'

function MusicController() {
  const {isPlaying, isActive, activeSong, songs, currentIndex} = useSelector(state => state.songData)
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(songs.length) dispatch(playPause(true))
  },[currentIndex])

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false))
    } else {
      dispatch(playPause(true))
    }
  }

  const handleNextSong = () => {
    dispatch(playPause(false))

    if (currentIndex) {
      dispatch(playNextSong((currentIndex + 1) % songs.length))
    } else {
      dispatch(playNextSong(Math.floor(Math.random() * songs.length)))
    }
  }

  const handlePrevSong = () => {
    dispatch(playPause(false))

    if (currentIndex === 0) {
      dispatch(playPrevSong(songs.length - 1))
    } else if (currentIndex) {
      dispatch(playPrevSong((currentIndex - 1)))
    } else {
      dispatch(playPrevSong(Math.floor(Math.random() * songs.length)))
    }
  }

  return (
    <div className='relative sm:px-12 px-8 w-full flex items-center justify-between'>
      <Track 
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
      />
      <div className='flex flex-1 justify-center items-center'>
        <Controls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          handleNextSong={handleNextSong}
          handlePrevSong={handlePrevSong}
          songs={songs} 
        />
      </div>
    </div>
  )
}

export default MusicController