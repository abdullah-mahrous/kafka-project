import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="content-text">
          <h2>
            Get In <span>Touch</span>
          </h2>
          <p>
            WE TAKE PRIDE IN OFFERING THE KIND OF CUSTOMER SERVICE THAT
            EMPHASIZES OUR COMMITMENT TO CULTIVATING A LONG-TERM RELATIONSHIP
            WITH OUR CLIENTELE. WHILE WE RECOGNIZE THAT SOMETIMES THINGS DO GO
            WRONG, WE MAKE IT A PRIORITY TO HELP OUR CUSTOMERS FIND THE BEST
            RESOLUTION POSSIBLE TO ENSURE THEIR SATISFACTION. Address:
          </p>
          <div className="list">
            <li>
              <a href="#">01286096033</a>
            </li>
            <li>
              <a href="#">furniture@gmail.com</a>
            </li>
            <li>
              <a href="#">Alexandria, Egypt</a>
            </li>
          </div>
        </div>

        <div className="contact-form">
          <form action="#">
            <input type="text" placeholder="Name" required />
            <input type="number" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <textarea
              name=""
              id=""
              cols="35"
              rows="10"
              placeholder="Message"
            ></textarea>
            <input type="submit" value="Send" className="submit" required />
            <input
              type="submit"
              value={"send"}
              className="btn"
              style={{
                backgroundColor: "#48957C",
                fontSize: "16px",
                color: "#fff",
              }}
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
