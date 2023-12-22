import React from 'react'
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';

function Controls({isPlaying,songs, handleNextSong, handlePrevSong, handlePlayPause,}) {
  return (
    <div className='flex items-center justify-around md:w-36 lg:w-52 2xl:w-80'>
      { songs?.length &&
        <MdSkipPrevious 
            size={30}
            color='#fff'
            className='cursor-pointer'
            onClick={handlePrevSong}
        />
      }
      { isPlaying 
        ? <BsFillPauseFill 
            onClick={handlePlayPause}
            size={45}
            className='cursor-pointer'
            color='#fff'
          />
        : <BsFillPlayFill 
            onClick={handlePlayPause}
            size={45}
            className='cursor-pointer'
            color='#fff'
          />
      }
      { songs?.length &&
        <MdSkipNext 
          size={30}
          color='#fff'
          className='cursor-pointer'
          onClick={handleNextSong}
        />
      }
    </div>
  )
}

export default Controls