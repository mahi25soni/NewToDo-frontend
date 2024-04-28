import React from 'react'
import './Navbar.css'
import Button from '../buttons/Button'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
     <div id='navbar'>
     <Link to="/" style={{ textDecoration: 'none' }}>
  <h1 className='navbar-title'>ToDo</h1>
</Link>

        
        <div className='navbar-buttons'>
      <Link to="/login">
        <Button name={"Login"}></Button>
      </Link>
      <Link to="/signup">
        <Button name={"SignUp"}></Button>
      </Link>
    </div>

     </div>
    </>
  )
}
