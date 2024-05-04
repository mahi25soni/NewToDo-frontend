import React, { useEffect, useState , memo} from "react";

import "./AllTasks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Task from "./Task";
import { getAllTask } from "../../apis/AllApi";
import { useRecoilValue } from "recoil";
import { taskList } from "../../store/variable";


const AllTask = memo(function AllTask({token}) {
  console.log("token inside all tasks is ", token);
  const all_task = useRecoilValue(taskList);

  return (
    <>
      {all_task.map((task) => (
        <Task key={task._id} id={task._id} title={task.title} desc={task.description} token={token} />
      ))}
    </>
  );
})

export default AllTask


