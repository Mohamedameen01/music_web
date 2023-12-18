import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PlayPause from './PlayPause'
import { Link } from 'react-router-dom'

function SongCards() {
  const {songs} = useSelector(state => state.songData)
  console.log("songs",songs)
  const activeSong = 'Chammak Challo'
  return (
    <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
      {songs.map(song => (
        <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
          <div className='relative w-full h-56 group'>
            <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50
              group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70'
              : 'hidden'}`}>
              <PlayPause />
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
      ))
      }
    </div>
  )
}

export default SongCards