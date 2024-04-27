import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
     <div id='navbar'>

        <h1 className='navbar-title'>ToDo App</h1>
        <div className='navbar-buttons'>
          <button>SignUp</button>
          <button>Login</button>
        </div>

     </div>
    </>
  )
}
