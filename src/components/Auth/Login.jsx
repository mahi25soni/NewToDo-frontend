import React, { useEffect, useState } from "react";
import "./Auth.css";
import lendpage from "../../assets/photu.png";
import { BASE_URL, loginApi } from "../../apis/AllApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });


  function getLoginData(e) {
    e.preventDefault();
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  }

  async function callApi(e) {
    e.preventDefault();
    const loginResponse = await loginApi(userdata);
    setToken(loginResponse.token);
  }
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

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
            name="email"
            id=""
            placeholder="Enter your email"
            onChange={getLoginData}
          />

          <input
            className="authInput"
            type="text"
            name="password"
            id=""
            placeholder="Enter your password"
            onChange={getLoginData}
          />

          <button
            style={{
              marginTop: "1rem",
            }}
          >
            Login In
          </button>
        </form>
      </div>
    </div>
  );
}
