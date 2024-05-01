import React, { useEffect, useState } from 'react'
import './AllTasks.css'
import { getAllTask } from '../../apis/AllApi'
import { useSearchParams } from 'react-router-dom'
export default function Task({title, desc}) {

  return (
    <div className="task">
    <input
      className="getTaskCheckbox"
      type="checkbox"
      name="taskDone"
      id=""
      onClick={() => console.log('sfdkjsdfskjdfh')}
    />
    <div className="taskContent">
      <h2 style={{
        color : "#b57d0d"
      }}>{title}</h2>

      <span >{desc}</span>
    </div>
    <h3 onClick={() => console.log("sdfjskjdfhkffskdfjhskfdjhskjdfhskldjfhslkdjfhljf")} id="crossSign">X</h3>

    
  </div>
  )
}
