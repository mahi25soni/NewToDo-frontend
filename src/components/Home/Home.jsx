import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";
import "./Home.css";
import AllTasks from "../Task/AllTasks";
import { useNavigate } from "react-router-dom";
import { addTask , getAllTask} from "../../apis/AllApi";
import { useRecoilState, useSetRecoilState } from "recoil";
import { newTaskVariable, taskList, userToken } from "../../store/variable";

export default function Home() {
  const navigate = useNavigate();

  const [taskinfo, setTaskinfo] = useState({
    title: "",
    description: "",
  });
  const setAll_task = useSetRecoilState(newTaskVariable)
  
  var token = localStorage.getItem("user_login_token");
  // const setToken = useSetRecoilState(userToken)
  // setToken(token)
  console.log("token in home is", token)

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    console.log("home, login wala useEffect")
  }, []);

    
  useEffect(() => {
    (async () => {
      const final = await getAllTask(token);
      setAll_task(final.data)
      console.log("allTask, useEffect to get all task")
    })();
  }, []);



  function getTaskData (e) {
    e.preventDefault();
    setTaskinfo({...taskinfo, [e.target.name] : e.target.value})
  }

  async function callApi(e) {
    e.preventDefault();
    const taskResponse = await addTask(taskinfo, token)
    setAll_task(prevTasks => [taskResponse.data, ...prevTasks]);
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
      <AllTasks token={token}></AllTasks>
    </>
  );
}
