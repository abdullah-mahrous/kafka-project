import React from "react";
import "./about.css";
import aboutImage from "../../images/about-img.png";
import review1 from "../../images/pic-1.png";
import review2 from "../../images/pic-2.png";
import review3 from "../../images/pic-3.png";

const About = () => {
  const reviews = [
    {
      image:review1,
      name: "John Doe",
      desc: "I'm very impressed with the quality of the product. It exceeded my expectations!",
    },
    {
      image:review2,
      name: "Emlia Smith",
      desc: "The customer service was excellent, and the product arrived on time.",
    },
    {
      image:review3,
      name: "Mark Johnson",
      desc: "The design and functionality of the product are outstanding. Highly recommended!",
    },
  ];
  return (
    <div className="container">
      <section className="about" id="about">
        <div className="about-img">
          <img src={aboutImage} />
        </div>
        <div className="about-text">
          <h3>Furniture service About us</h3>
          <p>
            We provide online solutions for all your interior décor
            requirements. Every piece of furniture is designed in-house through
            our manufacturing unit in Egypt. You can save up to 30% on all
            furniture deals as there are no intermediary entities involved.
          </p>
          <h4>
            If you are looking for exclusive furniture pieces which reflect your
            personality and lend elegance to your home, then you are at the
            right place
          </h4>
        </div>
      </section>

      <section className="review" id="review">
        <div className="main-txt">
          <h3>
            Customers <span>Review</span>
          </h3>
        </div>

        <div className="review-content">
          {reviews.map((review, index) => {
            return (
              <div key={index} className="box">
                <div className="img">
                  <img src={review.image} />
                </div>
                <h3>{review.name}</h3>
                <div className="star">
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                  <i className="fa-solid fa-star checked"></i>
                </div>
                <p>
                  {review.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
