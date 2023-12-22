import React from 'react'

function Track({isPlaying, isActive, activeSong}) {
  return (
    <div className="flex-1 flex items-center justify-start">
      <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
        <img 
          src={activeSong?.images?.coverart} 
          alt="cover_img"
          className="rounded-full" 
        />
      </div>
      <div className='w-[50%]'>
        <p className='truncate text-white font-bold text-lg'>
          {activeSong?.title ? activeSong.title : 'No Active Song'}
        </p>
        <p className='truncate text-gray-300'>
          {activeSong?.subtitle ? activeSong.subtitle : ''}
        </p>
      </div>
    </div>
  )
}

export default Track