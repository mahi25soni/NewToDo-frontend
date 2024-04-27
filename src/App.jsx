import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>

    </Routes>
    </BrowserRouter>

    
  )
}

export default App
