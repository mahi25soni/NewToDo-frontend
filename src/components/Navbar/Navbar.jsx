import React from 'react'
import './Navbar.css'
import Button from '../buttons/Button'

export default function Navbar() {
  return (
    <>
     <div id='navbar'>

        <h1 className='navbar-title'>ToDo App</h1>
        <div className='navbar-buttons'>
          <Button name={"Login"}></Button>
          <Button name={"SignUp"}></Button>
        </div>

     </div>
    </>
  )
}
