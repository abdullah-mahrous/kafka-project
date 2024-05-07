import React from "react";
import "./404.css";
import { Link } from "react-router-dom";

const NotFOund = () => {
  return (
    <div>
      <div className="home-return">
        <div className="info">
          <h1 className="main-title">404 Not Found</h1>
          <p className="text-danger">
            Your visited page not found. You may be go home page
          </p>
          <Link to={"/"}>
            Back to home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFOund;
