import React from "react";
import "./Navbar.css";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";
import { userToken } from "../../store/variable";
import { useSetRecoilState, useRecoilState } from "recoil";

export default function Navbar() {
  const [token, setToken] = useRecoilState(userToken)

  return (
    <>
      <div id="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="navbar-title">ToDo</h1>
        </Link>

        {
          !token ? 
          <div className="navbar-buttons">
          <Link to="/login">
            <Button name={"Login"}></Button>
          </Link>
          <Link to="/signup">
            <Button name={"SignUp"}></Button>
          </Link>
        </div> :
        <div className="navbar-buttons">
            <button onClick={() => {
              localStorage.removeItem('user_login_token');
              window.location.href = "/" 
              setToken("")
            }}>Logout</button>
        </div>
        }



        
      </div>
    </>
  );
}
