import React from "react";
import "./home.css";
import { furnitureProducts } from "../../data/productsData";
import { cardData } from "../../data/cartData";
import { Link, useNavigate } from "react-router-dom";

import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import p6 from "../../images/p6.png";
import p7 from "../../images/p7.png";
import p8 from "../../images/p8.png";
import p9 from "../../images/p9.png";
import p10 from "../../images/p10.png";

import { UseCheckLogin } from "../../hooks/UseCheckLogin";

let productsImgs = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10],
    baseURL = process.env.REACT_APP_API_KEY;


const Home = ({ setCartNum }) => {
  const [products, setProducts] = React.useState([]);

  const navigate = useNavigate();

  // fetch products on mounted
  React.useEffect(()=>{
    const request = new Request(`${baseURL}/api/products`,
      {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
      }
  )
    
    fetch(request)
    .then(res=>{
      if(res.ok)
        return res.json();
    })
    .then(data=>{      
      // adding imgs to products
      for(let i = 0; i < data.length; i ++)
        data[i].image = productsImgs[i];
      
      setProducts(data);
    });
  }, []);

  const addToCart = (product) => {
    const isLogin = UseCheckLogin();
    if (!isLogin) {
      navigate("/login");
      return;
    }
    const isexsist = cardData.find((pro) => {
      return pro.Id === product.Id;
    });

    if (isexsist) {
      const index = cardData.indexOf(isexsist);
      cardData[index].quantity += 1;
    } else {
      cardData.push({
        ...product,
        quantity: 1,
      });
    }
    setCartNum(cardData.length);
  };
  return (
    <div>
      <div className="home">
        <div className="main-text">
          <h1>
            Discover The Best <br />
            Furniture For You
          </h1>
          <p>
            We provide online solutions for all your interior décor
            requirements. Every piece of furniture is designed in-house through
            our manufacturing unit in Egypt. You can save up to 30% on all
            furniture deals as there are no intermediary entities involved..
          </p>
          <button id="btn">View More</button>
        </div>
      </div>

      <section className="offers">
        <div className="offer-content">
          <div className="row">
            <i className="fa-solid fa-truck-fast"></i>
            <h3>Free Delivery</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="row">
            <i className="fa-solid fa-headset"></i>
            <h3>Support 24/7</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="row">
            <i className="fa-solid fa-rotate-left"></i>
            <h3>30 Day Return</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="row">
            <i className="fa-solid fa-cart-shopping"></i>
            <h3>Secure Shopping</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>

      <section className="product" id="product">
        <div className="main-txt">
          <h3>Best Products</h3>
        </div>
        <div className="card-content">
          {products.map((product, index) => {
            if (index >= 8) {
              return;
            }
            return (
              <div key={index} className="row card">
                <Link to={`/products/${product.Id}`} state={product.image}>
                  <img className="card-img-top" src={product.image} />
                  <div className="card-body">
                    <h3 className="card-title">{product.Title}</h3>
                    <p className="card-text"> {product.Description}</p>
                    <h5>Price {product.price} LE</h5>
                  </div>
                </Link>
                <button
                  style={{ zIndex: 1478, position: "relative" }}
                  onClick={() => addToCart(product)}
                  className="btn cartBtn"
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <div className="banner">
        <div className="banner-content">
          <h5>Get Discount Up To 50%</h5>
          <h3>Best Deal For Weak</h3>
          <p>
            Get up to 50% off this weak and get offer <br />
            Don't miss
          </p>
          <button>
            <a href="#products">Order</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
