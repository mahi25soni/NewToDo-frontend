import React from 'react'
import Button from '../buttons/Button'
import './Home.css'
export default function Home() {
  return (
    <div className='addTask'>
        <input type="text" id='title' name='title' placeholder='Title' />
        <input type="text" id='desc' name='desc' placeholder='Description' />
        <Button name={"Add task"}></Button>
    </div>
  )
}
