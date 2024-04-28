import React from 'react'
import Button from '../buttons/Button'
import './Home.css'
import AllTasks from '../Task/AllTasks'
export default function Home() {
  return (
    <>
      <div className='addTask'>
        <input className='addTaskInput' type="text" id='title' name='title' placeholder='Title' />
        <input className='addTaskInput' type="text" id='desc' name='desc' placeholder='Description' />
        <Button name={"Add task"}></Button>
      </div>

      <AllTasks></AllTasks>
    </>

  )
}
