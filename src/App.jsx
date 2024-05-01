import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import Home from './components/Home/Home'


function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />

    </Routes>
    </BrowserRouter>

    
  )
}

export default App
