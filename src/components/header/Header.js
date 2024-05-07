import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UseCheckLogin } from "../../hooks/UseCheckLogin";
import logo from "../../images/logo.png";
/* import { cardData } from "../../data/cartData";
import { useHistory } from 'react-router-dom'; */

const Header = ({ cartNum }) => {
  const [isLogin, setIsLogin] = useState();
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setIsLogin(UseCheckLogin());
  }, [location]);

  const active = location.pathname.split("/")[1];

  const handleLogout = () => {
    //  clear the "name" and "isLogin" items from localStorage
    localStorage.removeItem("name");
    localStorage.removeItem("isLogin");

    // Redirect to the home page after logout
    navigate('/');
  };

  return (
    <div className="header">
      <nav>
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>
        <div className="content">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>

          <ul className="links">
            <li>
              <Link className={active === "" ? "active" : ""} to="/" id="first">
                Home
              </Link>
            </li>
            <li>
              <Link className={active === "about" ? "active" : ""} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link
                className={active === "products" ? "active" : ""}
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className={active === "contact" ? "active" : ""}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="iconContainer">
          <Link to={"/cart"}>
            <i className="fa font-weight: 400; badge fa-lg" value={cartNum}>
              &#xf07a;
            </i>
          </Link>
          {isLogin ? (
            <>
            <i className="fa-regular fa-user"></i>
            <button className="btn headerLogoutBtn" onClick={handleLogout}>
              Logout
            </button>
            </>
          ) : (
            <Link to={"/login"}>
              <button className="btn headerLoginBtn">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
