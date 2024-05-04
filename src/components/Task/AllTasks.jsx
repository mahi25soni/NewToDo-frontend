import React, { useEffect, useState , memo} from "react";

import "./AllTasks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Task from "./Task";
import { getAllTask } from "../../apis/AllApi";
import { useRecoilValue } from "recoil";
import { taskList } from "../../store/variable";


export default function AllTasks({token}) {
  const all_task = useRecoilValue(taskList)
  return (
    <>
      {all_task.map((task) => (
        <Task key={task._id} title={task.title} desc={task.description}></Task>
      ))}
    </>
  );
}
