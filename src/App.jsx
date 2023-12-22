import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Discover} from './pages'
import { useSelector } from 'react-redux'
import MusicController from './components/music_controls/MusicController'

function App() {
  const { activeSong } = useSelector(state => state.songData)
  return (
    <div>
      <div className='px-6 min-h-[100vh] h-100 bg-gradient-to-br from-black to-[#121286]'> 
        <Routes>
          <Route path='/' element={<Discover /> } />
        </Routes>

      </div>
      {activeSong?.title &&
        <div className='fixed h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10'>
          <MusicController />
        </div>
      }
    </div>
  )
}

export default App