import React, { useState } from "react";
import "./login.css";
import authImg from "../../../images/auth.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({});
  const [errMs, setErrMs] = useState("");
  const navigate = useNavigate();

  const handelsubmit = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (email == userData.email && password == userData.password) {
      localStorage.setItem("isLogin", true)
      navigate("/");
    } else {
      setErrMs("wrong email or password");
    }
  };
  return (
    <div className="container">
      <div className="main-content">
        <div className="image">
          <img src={authImg} alt="this is an image about a phone" />
        </div> 
        <form onSubmit={handelsubmit} className="login-info">
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
          <input
            name="email"
            required={true}
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="Email or Phone Number"
          />
          <input
            name="password"
            required={true}
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
            type="password"
            placeholder="Password"
          />
          <div className="btnContainer">
            <button id="log-btn">Log in</button>
            <span>
              don't have account? <Link to={"/rejester"}>Rejester</Link>
            </span>
          </div>
          <p style={{ color: "red" }}>{errMs}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
