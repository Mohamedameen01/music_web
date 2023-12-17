import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Discover from './pages/Discover'

function App() {
  return (
    <div className='px-6 h-[100vh] bg-gradient-to-br from-black to-[#121286]'> 
      <Routes>
        <Route path='/' element={<Discover /> } />
      </Routes>
    </div>
  )
}

export default App