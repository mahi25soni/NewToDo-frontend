import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Signup from './components/Auth/Signup'

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Signup></Signup>
    <Routes>

    </Routes>
    </BrowserRouter>

    
  )
}

export default App
