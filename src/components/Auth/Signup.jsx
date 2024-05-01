import React, { useState } from "react";
import "./Auth.css";
import lendpage from "../../assets/photu.png";
import { signupApi } from "../../apis/AllApi";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate()
  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  function getSignupData(e) {
    e.preventDefault();
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  }

  function callApi(e) {
    e.preventDefault();
    const signinResponse = signupApi(userdata);
    navigate("/login")
  }

  return (
    <div className="main-box">
      <div>
        <img src={lendpage} alt="" id="lend_image" />
      </div>

      <div>
        <form
          action=""
          onSubmit={callApi}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            className="authInput"
            type="text"
            name="username"
            id=""
            placeholder="Enter your username"
            onChange={getSignupData}
            value = {userdata.username}
          />

          <input
            className="authInput"
            type="text"
            name="email"
            id=""
            placeholder="Enter your email"
            onChange={getSignupData}
            value = {userdata.email}

          />

          <input
            className="authInput"
            type="text"
            name="password"
            id=""
            placeholder="Enter your password"
            onChange={getSignupData}
            value = {userdata.password}

          />
            <button oncli></button>
          <button
            type="submit"
            style={{
              marginTop: "1rem",
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
