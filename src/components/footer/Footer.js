import React from "react";
import "./footer.css";
import logo from "../../images/logo.png";
import app from "../../images/pay/app.png";
import play from "../../images/pay/play.png";
import pay from "../../images/pay/pay.png";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img src={logo} alt="logo" className="logo" />
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong>562 Wellington Road, Street 32, San
          Francisco
        </p>
        <p>
          <strong>Phone: </strong>+01 2222 365 /(+91) 01 2345 6789
        </p>
        <p>
          <strong>Hours: </strong>10:00 - 18:00, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest-p"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Condition</a>
        <a href="#">Contact us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <p>Secure Payment Gateways</p>
        <img src={pay} alt="pay" />
      </div>

      <div className="copyright">
        <p>&copy; Copyright G1 ITI. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
