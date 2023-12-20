import React from 'react'
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";

function PlayPause({ song, handlePause, handlePlay, isPlaying, activeSong}) {
  return(
    <div>
      { isPlaying && activeSong?.title === song.title ? 
        (
          <FaCirclePause 
            size={35}
            className='text-gray-300'
            onClick={handlePause}
          /> 
        ) : (
          <FaCirclePlay 
            size={35}
            className='text-gray-300'
            onClick={handlePlay}
          />
        )
      }
    </div>
  )
  }

export default PlayPause