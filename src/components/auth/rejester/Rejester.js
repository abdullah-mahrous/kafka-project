import React, { useState } from "react";
import "./rejester.css";
import authImg from "../../../images/auth.png";
import { Link, useNavigate } from "react-router-dom";

const Rejester = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate()

  const handelClick = ()=>{
    localStorage.setItem("name", userData.name)
    localStorage.setItem("email", userData.email)
    localStorage.setItem("password", userData.password)
    navigate("/login")
  }
  return (
    <div className="container">
      <div className="main-content">
        <div className="image">
          <img src={authImg} alt="this is an image about a phone" />
        </div>
        <form onSubmit={handelClick} className="login-info">
          <h1>Creat an account</h1>
          <p>Enter your details below</p>
          <input
            required={true}
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            required={true}
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            required={true}
            onChange={(e) =>
              setUserData({ ...userData, [e.target.name]: e.target.value })
            }
            type="password"
            name="password"
            placeholder="Password"
          />
          <div className="btnContainer">
            <button id="log-btn">Rejester</button>
            <span>
            Already have account? <Link to={"/login"}>Log in</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rejester;
