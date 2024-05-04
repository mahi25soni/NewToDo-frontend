import React, { useEffect, useState , memo} from "react";

import "./AllTasks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Task from "./Task";
import { getAllTask } from "../../apis/AllApi";
import { useRecoilState, useRecoilValue } from "recoil";
import { taskList, newTaskVariable } from "../../store/variable";


const AllTask = memo(function AllTask({token}) {
  const all_task = useRecoilValue(newTaskVariable)

  console.log("all task ", all_task)
  return (
    <>
      {all_task === "Invalid token" ? "" : all_task.map((task) => (
        <Task key={task._id} id={task._id} title={task.title} desc={task.description} token={token} />
      ))}
    </>
  );
})

export default AllTask;


