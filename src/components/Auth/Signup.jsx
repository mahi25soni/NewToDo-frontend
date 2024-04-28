import React from 'react'
import './Auth.css'
import lendpage from '../../assets/photu.png'
export default function Signup() {
  return (
    <div className='main-box'>
        <div>
            <img src={lendpage} alt="" id="lend_image" />
        </div>

        <div>
            <form action="" style={{
                display : "flex", 
                flexDirection : "column",
                alignItems : "center"
            }}>
                <input className="authInput" type="text" name="username" id="" placeholder='Enter your username'/>

                <input className="authInput" type="text" name="email" id="" placeholder='Enter your email'/>

                <input className="authInput" type="text" name="password" id="" placeholder='Enter your password'/>

                <button style={{
                    marginTop : "1rem"
                }}>Sign In</button>
            </form>
        </div>


    </div>
  )
}
