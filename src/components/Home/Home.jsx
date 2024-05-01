import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";
import "./Home.css";
import AllTasks from "../Task/AllTasks";
import { useNavigate } from "react-router-dom";
import { addTask } from "../../apis/AllApi";

export default function Home() {
  const navigate = useNavigate();
  // const [token, setToken] = useState();

  const [taskinfo, setTaskinfo] = useState({
    title: "",
    description: "",
  });
  
  const token = localStorage.getItem("user_login_token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  function getTaskData (e) {
    e.preventDefault();
    setTaskinfo({...taskinfo, [e.target.name] : e.target.value})
  }

  function callApi(e) {
    e.preventDefault();
    const taskResponse = addTask(taskinfo, token)
    console.log("the task data is ", taskResponse)
  }

  return (
    <>
      <div className="addTask">
        <input
          className="addTaskInput"
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          onChange={getTaskData}
        />
        <input
          className="addTaskInput"
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          onChange={getTaskData}
        />
        <button onClick={callApi}>Go ahead</button>
      </div>

      <AllTasks></AllTasks>
    </>
  );
}
