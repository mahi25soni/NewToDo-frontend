import React, { useEffect, useState } from 'react'

import "./AllTasks.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Task from "./Task";
import { getAllTask } from '../../apis/AllApi';

export default function AllTasks() {
  const token = localStorage.getItem("user_login_token")
  const [all_task, setAll_task] = useState([])

  useEffect(async () => {
    const output = await getAllTask(token)
    console.log("outside the output", output)
    setAll_task(output.data)
  },[])

  return (
    <>
    {all_task.map(task => 
    <Task title={task.title} desc={task.description}></Task>
    )}
    </>

 
  );
}
