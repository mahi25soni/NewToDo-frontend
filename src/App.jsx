import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

    </Routes>
    </BrowserRouter>

    
  )
}

export default App
