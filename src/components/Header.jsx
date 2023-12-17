import React from 'react'
import { genres } from '../assets/constants'

function Header() {
  return (
    <div className='w-full flex justify-between items-center sm:flex-row flex-col py-4'>
      <h2 className='text-white font-bold text-3xl'>Discover</h2>
      <select 
        value=''
        onChange={() => {}}
        className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
      >
        {genres.map((genre) => 
          <option 
            key={genre.value} 
            value={genre.value}
          >
            {genre.title}
          </option>
        )}
      </select>
    </div>
  )
}

export default Header