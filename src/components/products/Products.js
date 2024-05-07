import React from "react";
import { useEffect, useState } from "react";
import "./products.css";

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

import { cardData } from "../../data/cartData";
import { Link, useNavigate } from "react-router-dom";
import { UseCheckLogin } from "../../hooks/UseCheckLogin";


let productsImgs = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10],
    baseURL = process.env.REACT_APP_API_KEY;


const Products = ({ setCartNum }) => {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
 
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


  // fetch products on mounted
  useEffect(()=>{
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


  return (
    <div>
      <div className="card-content ">
        {products.map((product, index) => {
          return (
            <div key={index} className="row card">
              <Link to={`/products/${product.Id}`} state={product.image}>
                <img className="card-img-top" src={product.image} alt="product img"/>
                <div className="card-body">
                  <h3 className="card-title">{product.Title}</h3>
                  <p className="card-text"> {product.Description}</p>
                  <h5>Price {product.price} LE</h5>
                </div>
              </Link>
              <button
                style={{ zIndex: 1478 }}
                onClick={() => addToCart(product)}
                className="btn cartBtn"
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
