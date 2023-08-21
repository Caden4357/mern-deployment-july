import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage'
import EditShow from './components/EditShow'
import DisplayOneShow from './components/DisplayOneShow'
function App() {

  return (
    <>
      <h1>TVDB</h1>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/editShow/:id' element={<EditShow/>}/>
        <Route path='/oneShow/:id' element={<DisplayOneShow/>}/>
      </Routes>
    </>
  )
}

export default App
