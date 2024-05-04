import React, { useEffect, useState } from 'react'
import './AllTasks.css'
import { deleteOneTask, getAllTask } from '../../apis/AllApi'
import { useSearchParams } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { taskList } from '../../store/variable'
export default function Task({title, desc, id, token}) {

  const setTask_list = useSetRecoilState(taskList)
  const delete_task = async (task_id) => {
    const deleteResponse = await deleteOneTask(task_id, token)
    setTask_list(deleteResponse.data)
  }

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
    <h3 onClick={() => delete_task(id)} id="crossSign">X</h3>

    
  </div>
  )
}
